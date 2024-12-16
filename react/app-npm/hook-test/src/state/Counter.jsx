/**
 * 상태관리 매니저를 활용한 컴포넌트 구현
 *  - 종합 화면 구성(컴포넌트 구성)
 *  - 해당 화면을 브라우저에 랜더링 후 테스트
 */

import TwoButton from './TwoButton';
import View from './View';
import View2 from './View2';

function Counter(){
    return (
        <div>
            <p> 카운터 : 전역상태관리(zustand)</p>
            {/* 서로 관계가 없는 동급레벨 컴포넌트들 */}
            <View/>
            <TwoButton/>
            <View2/>
        </div>
    );
}

export default Counter;