/**
 *  컴포넌트의 생애주기 확인
 *  - 컴포넌트의 내부 구동 매커니증 및 워크플로우 이해
 *  - 객체형 컴포넌트 구성
 *  - 훅이라는 주제부터 함수형 컴포넌트로 전환
 *      - 훅을 통해 생애주기와 비슷하게 처리할 수 있는 기능 제공
 *      - react 16부터 지원 -> 함수형 컴포넌트로 개발 패러다임 전환
 */

// 1. 모듈 가져오기
import React, {Component} from "react"; // react모듈로부터 가져온다
// Component는 개별모듈이다
// React는 Component를 포함하는 대표모듈이다

// 2. 클래스형 컴포넌트 구성
class LifeCycle extends Component{
    constructor(props){
        super(props);
        // 상태변수
        this.state = {
            r : Math.random() // 난수값을 상태변수로 세팅
        }
    }

    render(){
        return (
            <>
                라이프사이클 {this.state.r}
                <button onClick={()=>{
                    // 버튼을 누르면 상태변수가 바뀌어 상태가 바뀌므로 화면이 갱신됨
                    this.setState({r : Math.random()});
                }}>상태변경</button>
            </>
        );
    }
    // 생애주기 함수 추가 -> 참고용, 실제로는 훅에서 사용한다
    // 1. Component가 mount되기전(화면에 보이기 전)에 할 작업이 있을 때 사용
    //  할게 없으면 안쓰면 됨
    componentDidMount(){
        // Override
        console.log('컴포넌트가 화면에 보이기 직전');
    }

    // 2. 컴포넌트가 마운트 된 후 화면 갱신될 때 호출
    //  화면갱신 감지
    shouldComponentUpdate(nextProps, nextState, nextContext){
        // 갱신되고자 하는 컴포넌트의 요소들이 전달
        console.log('컴포넌트가 수정될려고 한다',nextProps, nextState, nextContext);
        return true;
    }

    // 3. 컴포넌트 업데이트 완료
    componentDidUpdate(){
        console.log('컴포넌트 변경됨');
    }

    // WorkFlow
    //  상태변수수정 -> shuoldComponentUpdate() -> render() -> componentDidUpdate()

    // 4. 컴포넌트 마운트 해제 -> 컴포넌트가 사라지려고 할 때
    componentWillUnmount(){
        // 뒷정리 코드(이벤트 해제, 리소스 해제)
        //   필요할 때 사용하면 된다
        // 지금 확인할 방법이 없어 라우트를 통해 화면전환이 될 때 확인가능
        console.log('컴포넌트가 사라질려고 한다');
    }
}

// 3. 대표 모듈화 구성
export default LifeCycle;