// 커스텀 컴포넌트, 홈페이지 담당(의미를 부여), 하나의 화면|모듈|구조

// 리소스(image, css)가져오기
import logo from './logo.svg';
import './App.css';

// LifeCycle.js로부터 대표 모듈을 가져온다
// 대표모듈명 -> LifeCycle 지정
import LifeCycle from './LifeCycle';
import MyInput from './MyInput';
import MySelect from './MySelect';
import MyCheckBox from './MyCheckBox';

// 대표모듈을 제외한 private한 컴포넌트들은 같이 있을 수 있다

// 함수형 컴포넌트 -> 커스텀을 JSX생성, 특정기능을 갖는다(지금은 대문역할)
function App() {
  // return JSX
  return (
    <div className="App">
      {/* className을 바꿔서 다른 css스타일을 적용시킬 수 있다 */}
      <header className="App-header">

        개씨발

        <LifeCycle/>

        <MySelect languages={['자바', '자바스크립트', '리액트']} initValue='리액트' />

        <MyCheckBox label='여행을 갈까?'/>

        <MyInput/>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>SPA기반 React로 구성한 홈페이지</p>
      </header>
    </div>
  );
}

// 현 파일을 대표함
// 다른 파일에서는 이 컴포넌트를 App으로 불러와 사용하면 된다
// 대표 모듈화 처리 -> App.js 컴포넌트는 외부에서 사용가능하다
export default App;
