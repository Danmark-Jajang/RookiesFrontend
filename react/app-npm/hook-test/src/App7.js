/**
 * 환율 계산기
 *  - 환율 정보를 가져와서, 실시간 환전 계산, 수수료(환율우대)부분 제외
 *  - 요구사항
 *      - 화면 
 *          -  왼쪽 (USD, JPY, EUR) 선택 <-> 오른쪽 (KRW 고정) : select
 *          -  왼쪽 [입력창] = 오른쪽 [입력창]
 *      - 오퍼레이션
 *          - 통화 선택 -> 왼쪽입력창에 수치를 입력( 5 $ )
 *          -  -> 오른쪽 계산된값 (5,000 원)
 *          - 정반대로 작동 가능함
 *      - 환율정보
 *          - 1분간격( 편의상 10분간격 )으로 통화 데이터 갱신
 *          - http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json 획득
 */
// 1. 모듈 가져오기
import './App.css';
import {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
} from "react";
import axios from 'axios'; // 통신모듈

// 전역변수
const EXCHANGE_URL = 'http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json';//'http://127.0.0.1:5500/app-npm/hook-test/dumy/exchange.json';//;

// 2. 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )
function App ( props ) {
    // 상태변수, 통화코드, 기본값 null
    // 상태변수 구현 -> exchangeCode
    const [ exchangeCode, setExchangeCode ] = useState( null );
    // 현재 선택한 통화 코드
    const [ curExchangeCode, setCurExchangeCode ] = useState( "USD" ); // 설정

    //환율 정보 -> 특정주기로 갱신 -> 화면갱신에는 영향X, useRef, 30s
    const exchangeRate = useRef(null);
    
    //- 상태변수 : leftInput, rightInput
    //- 값 변경 이벤트 처리 함수등록 : onExchangeLeft, onExchangeRight
    const [ leftInput, setLeftInput ]   = useState("");
    const [ rightInput, setRightInput ] = useState("");
    function onExchangeLeft( e ) {        
    }
    function onExchangeRight( e ) {        
    }


    // 요구사항 
    // 1. 환율정보 가져오기!! -> 일단 1회성 진행, 차후 지속적 반복 업그레이드
    //    useCallback() 으로 구현, 필요한 위치에서 호출
    const getExchangeInfo = useCallback( async ()=>{
        // 통화정보 획득
        const res = await axios.get( EXCHANGE_URL );
        // 통화 정보에서 select의 요소를 동적으로 구성
        const jsxOptions = res.data.map( ( exchange, idx )=>{
            // "name": "USDKRW=X", => "USD" 이값으로 세팅
            const { name } = exchange; // 데이터 1개의 형태는 객체
            // 실습 1분, 문자열.substring(시작인덱스, 끝인덱스)
            const code = name.substring(0, 3); // 시작인덱스<= 데이터 <끝인덱스
            return (
                <option key={idx} value={ code }>{ code }</option>
            );
        } );
        // 임시로 한국통화코드 삽입, 배열에 맴버 추가 삽입 (push())
        jsxOptions.push( <option key="-1" value="KRW">KRW</option> );
        // 상태 변수에 세팅
        setExchangeCode( jsxOptions );
    }, [] );

    // 1회성 호출
    useEffect( ()=>{
        console.log('환율 정보 획득');
        getExchangeInfo();

        // 통화 정보 세팅
        // exchangeRate.current = res.data.map((exchange, index)=>{
        //     {
        //     }
        // });
    }, []);

    // 환율정보 요청하여 "name": "JPYKRW=X"을 가각 추출해서 => JPY, USD,.. 추출
    // exchangeCode에 세팅할수 있는 준비

    // 환전을 위한 통화코드 변경 선택 이벤트 
    function exchangeHander ( evt ) {
        // 1. 입력된 내용 초기화 -> 0 or 빈값 <= 네이버는 값을 유지하여 변환
        // 2. 현재 통화 코드 조정 -> 상태변수 설정
        setCurExchangeCode( evt.target.value );
    }

    return (
        <div className='App'> {/* class 형태의 디자인 적용 */}
            <div className='App-header'>
                <h2>환율 계산기</h2>
                <fieldset>
                    <div>
                        {/* 통화 선택, 최초 선택값은 USD로 지정 */}
                        <select style={{ width:"45%" }}
                                onChange={ exchangeHander }
                                value={ curExchangeCode }
                        >
                            { exchangeCode }
                        </select>
                        =
                        {/* KRW 고정 */}
                        <select style={{ width:"45%" }} 
                                value={"KRW"} 
                                disabled>
                            { exchangeCode }
                        </select>
                    </div>
                    <br/>
                    <div>
                        {/* 환전 계산 */}
                        {/* 
                            - 상태변수 : leftInput, rightInput
                            - 값 변경 이벤트 처리 함수등록 : onExchangeLeft, onExchangeRight
                            실습 2분 : 상태변수, 이벤트처리함수 등록
                        */}
                        <input  placeholder='숫자만 입력'
                                value={ leftInput }
                                onChange={ onExchangeLeft }
                        />
                        =
                        <input placeholder='숫자만 입력'
                                value={ rightInput }
                                onChange={ onExchangeRight }
                        />
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

// 3. 대표 모듈화 -> 오직 1개만 지정
export default App;