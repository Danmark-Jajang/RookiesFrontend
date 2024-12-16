/**
 * 훅 - useReducer
 *  - 기존 상태변수 업데이트
 *      - 1가지 형태로 값을 업데이트, 값을 증가 등등 단순한 형태로 진행
 *      - ex) null <-> JSX, 1->2->3 같은 단순한 형태로 변형
 *  - 다양한 방식으로 업데이트
 *      - ex) +1, -2, +10, 120으로 설정 등 다양한 요구사항 반영
 *      - useReducer를 이용하여 구현
 *          - 복잡하고 다양한 업데이트 방식을 지원
 * 
 *  - 요구사항
 *      - 업데이트 액션(4가지 action)
 *          - 'up', 'down', 'reset', 'addLang'
 *          -  추가,  감소,,  100으로 초기화,  'ts'추가
 */

// 1. 모듈 가져오기
import {useReducer} from 'react'

// 2. 필요한 기능 구현
// 기존같으면 useState를 2개 만들어 별도로 관리했지만, 하나로 묶을 수 있음
function reducer(state, actions){
    // action : 특정 행동을 하라는 명령(up, down, reset, addLang)
    // 전달된 데이터 추출
    const {action} = actions;
    const {age, langs} = state;

    // 액션별 상태변수 업데이트(수정이 아닌 덮어쓰기) 처리
    if(action === 'up'){
        return {age: age + 1, langs}
    }else if(action === 'down'){
        return {age: age-1, langs}
    }else if(action === 'reset'){
        return {age:100, langs}
    }else if(action === 'addLang'){
        return {age:age, langs:[...langs, 'C#']}
    }
    throw Error('알 수 없는 액션')

}

// 3. 컴포넌트 만들기
function ReducerComponent(params){
    // [상태변수, 액션을 전달하는 함수]
    const [state, dispatch] = useReducer(reducer, {
        // 관리하는 초기데이터
        age: 20,
        langs:['js', 'ts', 'react', 'java', 'springboot']
    });
    return (
        <div style={{margin: "1em"}} >
            <p>useReducer 테스트</p>
            {/* 분해하지 않고 사용 */}
            <p>{ state.age }</p>
            <div>{state.langs.map((item, index)=>{
                return (<p key={index} >{item}</p>);
            })}</div>
            <p>다양한 상태변수 업데이트</p>
            {/* 버튼클릭 -> 이벤트발생 -> 액션전달(dispatch(action)) -> 
               액션에 따라 상태변수 업데이트(action) -> 화면갱신 */}
            <button onClick={()=>{dispatch({action:"up"})}}>+1</button>
            <button onClick={()=>{dispatch({action:"down"})}}>-1</button>
            <button onClick={()=>{dispatch({action:"reset"})}}>rest</button>
            <button onClick={()=>{dispatch({action:"addLang"})}}>언어추가</button>
        </div>
    );
}

// 4. 대표모듈 지정
export default ReducerComponent;