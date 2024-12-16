/**
 * useRef, useEffect 사용
 *  - 속성이 있기 때문에 props에 데이터가 넘어온다
 *  - url을 이용하여 일종의 게시판형태(table) 리스트 구성
 *      - 상품데이터 -> <tr> .. </tr>
 *  - 상품데이터는 axios로 불러올거임
 *      - 통신시점은 컴포넌트가 보이기 직전 or 필요할 때
 *      - 매번 요청하면 느려질 것 -> 최적화 개념 - 메모이제이션 기능 사용
 *      - useMemo, useCallback
 *      - 모듈설치
 *          -npm install axios
 */

import {
    useState,       // 상태변수 - 화면갱신
    useEffect,      // 중요한 생애주기함수 대체
    useMemo,        // 데이터 메모이제이션
    useCallback,    // 함수 메모이제이션
    useRef,         // 데이터가 바뀌어도 화면갱신 안되게해줌
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
} from 'react';
import './App.css';
import axios from 'axios';

async function getAllProducts(url){
    // ajax통신을 통해 목록리스트를 불러와라
    // 비동기처리 (async ~ await)
    console.log('전체 상품 데이터 획득(페이징 기능 x')
    const res = await axios.get(url); //비동기 코드를 동기처럼 처리
    console.log('통신결과', res.data); //Object list로 들어옴
    return res.data.map((product, index)=>{
        const {id, title, price, description, category, image, rating} = product;
        const {rate, count} = rating;
        return (
            <li key={index} > {/* id를 키값으로 사용해도 됨 */}
                <img src={image} width='20px' />
                <b>{title} : ${price}</b>
            </li>
        );
    });

    //획득한 결과를 JSX로 구성 - 화면 표시까지

}

// 표준함수 스타일 + 대표모듈화
// props의 비구조화를 따로하지 않고 바로 진행
export default function App({url, pid}){
    console.log(url, pid)

    // 상태변수 정의
    const [productAll, setProductAll] = useState(null);

    // 정의 : const|let 변수명 = useRef(초기값);
    // 사용 : 변수.current
    const marketUrl = useRef(url);

    // productID라는 useRef에 pid넣어서 생성
    // 숫자로 넣었지만 넘어오는건 문자열이기 때문에 숫자로 바꿔봄
    const productID = useRef(parseInt(pid));


    // useEffect : 컴포넌트, 상태변수등 모니터링 대상에 따라 호출됨
    // componentDidMount()와 비슷하게 작동
    // 문법 : useEffect(콜백함수, [관찰대상]);
    useEffect(()=>{
        // 관찰대상이 없으므로 1회성으로 호출됨
        console.log('컴포넌트가 보일려고 한다');
        // 1회성 -> 최초에 ajax통신을 통해 상품 데이터를 획득
        getAllProducts(marketUrl.current) // 결과가 비동기로 도착함
            .then(res => {
                setProductAll(res)
                // Promise패턴에 의해 데이터가 언젠가 오면 then실행
                // 상태변수값을 수정하여 화면 갱신
                // res -> JSX
                // 1회성이기 때문에 render()가 2번 돌았지만, 1번만 출력
            })
            .catch(err => {})
            .finally();
    }, []);

    return (
        <div className='App'>
            <div className='App-header'>
                <h1><span style={{color:"skyblue"}}>상품정보</span></h1>
                <div>
                    <ul>
                        {productAll}
                    </ul>
                </div>
            </div>
        </div>
    );
}