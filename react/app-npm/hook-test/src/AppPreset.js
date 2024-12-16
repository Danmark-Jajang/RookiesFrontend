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
    return (
        <div className='App'>
            <div className='App-header'>
                작성하기
            </div>
        </div>
    );
}