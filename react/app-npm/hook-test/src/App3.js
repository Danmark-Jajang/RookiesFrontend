import {
    useState,       // 상태변수 - 화면갱신
    useEffect,      // 중요한 생애주기함수 대체
    useMemo,        // 데이터 메모이제이션
    useCallback,    // 함수 메모이제이션
    useRef,         // 데이터가 바뀌어도 화면갱신 안되게해줌
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
} from 'react';
import './App.css'

// 표준함수 스타일 + 대표모듈화
export default function App(props){
    // 함수형 컴포넌트 기본 로직, 변수, 함수등 구현
    console.log('함수형 컴포넌트 구성')

    // 1. 상태변수 초기화 -> useState 훅 사용
    // const|let [변수명, set변수명] = useState(초기값), 1개만
    // 'set변수명'은 생략가능 -> 초기값의 업데이트를 안할 때
    // count는 변수, setCount는 함수로 만들어져서 해당 변수 전용 setter가 생성됨
    let [count, setCount] = useState(1); // 초깃값 넣기

    // 상태변수 업데이트 및 동적 JSX 구성
    const countJSX = (
        <>
            {/*버튼을 클릭하면 상태변수 + 1 & 화면갱신
                - 클릭이벤트 등록(inline event handler)
            */}
            <button onClick={()=>{
                setCount(count+1);
            }} >Count : {count}</button>
        </>
    );

    // useState를 사용한 조건부 랜더링 -> JSX의 세팅값이 null이면 처리를 안함
    // 통신을 위해 데이터를 받아서 세팅할 때 동적처리하면 된다
    let [pageContent, setPageContent] = useState(null);
    const pageContentJSX = (
        <div onClick={()=>{
            setPageContent(pageContent? null : '내용이 세팅됨')
            
        }}>
            {/*div에 onClick 이벤트 등록,
            화살표함수를 eventHandler, 
            pageContent = [{pageContent}]*/}
            pageContent = [{pageContent}]
            <br/>
            pageContent = [{pageContent? "true":"false"}]
        </div>
    );

    return (
        <div className='App'>
            <div className='App-header'>
                작성하기
                <br/>
                {/*상태변수 사용(setXXX)*/}
                {countJSX}
                {/*조건부 랜더링*/}
                {pageContentJSX}
            </div>
        </div>
    );
}