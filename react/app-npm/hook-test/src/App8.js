/**
 * useContext(), createContext()
 *  - 리액트는 컴포넌트의 집합
 *  - 컴포넌트는 트리구조
 *  - 상위 컴포넌트의 정보를 하위 컴포넌트에 전달
 *      - 데이터 전달 방법
 *          - 1세대 : 
 *          - useContext()를 이용한 방식
 *              - 상위 컴포넌트에 전달한 데이터 시발 못봤다
 *          - props를 활용한 구성 (복잡하다)
 */

import {
    useState,       // 상태변수 - 화면갱신
    useEffect,      // 중요한 생애주기함수 대체
    useMemo,        // 데이터 메모이제이션
    useCallback,    // 함수 메모이제이션
    useRef,         // 데이터가 바뀌어도 화면갱신 안되게해줌
    useContext,
    createContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
} from 'react';
import './App.css'

// 전역공간에 Context생성
//  어떤 Type의 데이터이던지 저장 가능(Any로 받기 때문)
const TextContext = createContext("내일이면 금요일이당");

function End(){
    // 하위 컴포넌트가 사용하는 훅
    const data = useContext(TextContext);
    return (
        <>
            <p>가장 하위에 있는 컴포넌트</p>
            {data}   
            {/* 하위에서도 데이터가 와진다 */}
        </>
    );
}

function Mid(){
    return (
        <><End/></>
    );
}

// 표준함수 스타일 + 대표모듈화
export default function App(props){
    const [sendingData, setSendingData] = useState("Sample Data"); //조상 데이터
    return (
        <div className='App'>
            <div className='App-header'>
                <h2>useContext 테스트</h2>
                {/* 
                    2. 전달할 데이터를 받을 컴포넌트를 감싸서 표현(뭔소리냐 이게)
                        - 전역으로 만든 컨텍스트 사용하여 공급 표현
                        - 상위 컴포넌트의 데이터도 전달
                            - 기본값은 공급할 때 변경가능
                        - 상위 컴포넌트에서 상태변수를 변경하면 하위도 영향을 받는다
                */}
                <TextContext.Provider value={sendingData} >
                    <Mid/>
                </TextContext.Provider>
                <input onChange={(e)=>{setSendingData(e.target.value)}} />
            </div>
        </div>
    );
}