/**
 * 함수형 컴포넌트로 구성 세팅
 */

// 1. 모듈 가져오기(훅) 
import {
    useState,       // 상태변수 - 화면갱신
    useEffect,      // 중요한 생애주기함수 대체
    useMemo,        // 데이터 메모이제이션
    useCallback,    // 함수 메모이제이션
    useRef,         // 데이터가 바뀌어도 화면갱신 안되게해줌
    useContext,     // 여러 컴포넌트가 접근하여 사용하는 데이터 관리
} from 'react';
//      스타일 가져오기
import './App.css'

// 2. 커스텀 컴포넌트 정의
// js 파일 내부에 여러개의 컴포넌트가 정의도리 수 있다
// 익명함수 스타일
const App2 = (props) => {
    // JSX 반환
    return (
        <div>
            익명함수 스타일 컴포넌트
        </div>
    );
}
// 표준함수 스타일
function App(props){
    return (
        <div className='App'>
            <div className='App-header'>
                <App2/>
                표준함수 스타일의 컴포넌트
            </div>
        </div>
    );
}

// 3. 대표 모듈 지정(한개만 가능)
export default App;