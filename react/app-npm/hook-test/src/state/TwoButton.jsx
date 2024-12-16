/**
 * 카운터 증감(action)을 처리하는 2개의 버튼 컴포넌트
 *  - 증가, 감소하는 이벤트 발생
 */

import useStore from './store';

function TwoButton(){
    const {increment, decrement} = useStore(); //액션 2개 획득
    return (
        <>
            <button onClick={increment} > 증가(+1) </button>
            <button onClick={decrement} > 감소(-1) </button>
        </>
    );
}

export default TwoButton;