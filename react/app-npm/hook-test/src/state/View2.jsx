/**
 * 카운터값을 표현하는 컴포넌트 2
 */

import useStore from './store';

function View2(){
    //전역 상태 관리 저장소에서 상태변수를 추출(count만 추출함)
    const {count} = useStore();
    return (
        <>
            {count};
        </>
    );
}

export default View2;