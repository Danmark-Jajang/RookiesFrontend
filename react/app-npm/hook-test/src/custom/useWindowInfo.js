/**
 * 커스텀 훅, 사용자 정의 훅, 필요에 의해 생성
 *  - useXxx()
 * 
 *  - 요구사항
 *      - 기존의 훅을 활용하여 새로운 기능을 가진 훅을 생성
 *      - useState + useEffect 활용
 */

// 1. module 가져오기
import { useState, useEffect } from "react";

// 2. 커스텀 훅 생성
const useWindowInfo = ()=>{
    // 현재화면(브라우저 화면)의 정보를 획득
    // 컴포넌트의 크기가 변경되면 같이 윈도우 정보도 변경되어 제공

    // 상태변수 초기화
    const [windowSize, setWindowSize] = useState({
        // window: 브라우저상 JS를 통해 접근 가능한 내장객체
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=>{
        // 이벤트핸들러 함수
        const 이벤트핸들러 = ()=>{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // 컴포넌트의 크기가 변경되면 계속 호축 -> 상태변수 변경
        window.addEventListener('resize', 이벤트핸들러);
        return ()=>{
            // 반드시 브라우저에 존재하는 윈도우 객체에 이벤트를 삭제해야함
            window.removeEventListener('resize', 이벤트핸들러)
        };
    });

    // 커스텀훅 상태변수 반환 <-> 컴포넌트는 JSX를 반환하는 랜더함수 구성하면서 마무리

    return windowSize;
};

// 3. 대표 모듈화
export default useWindowInfo