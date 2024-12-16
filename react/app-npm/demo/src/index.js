// ESM 방식 모듈 가져오기
// 가급적 수정하지 않는다. 커스텀 컴포넌트는 ㄱㅊ
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 커스텀 컴포넌트
//  대표모듈명으로 App으로 지정
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode : 나중에 볼거지만, 2번 수행함
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <div>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
