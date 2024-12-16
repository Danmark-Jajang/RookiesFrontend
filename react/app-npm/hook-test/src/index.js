import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App2 from './App2';
//import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
// import App7 from './App7';
// import App8 from './App8';
// import App6_mui from './App6_mui';
// import App7_mui from './App7_mui';
// import Db from './Dashboard';

import reportWebVitals from './reportWebVitals';
import ReducerComponent from './Reducer';
import CustomHook from './CustomHook';
import Counter from './state/Counter';
// import CssComponent from './css-test/CssComponent';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>terminal에서 실행중, vscode에서 별도실행하지 말것</h1>
    {/* <App /> */}
    <App2/>
    {/* <App3/> */}
    {/* <App4 url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App5 url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App8/> */}
    {/* <App6_mui url="https://fakestoreapi.com/products" pid="1"/> */}
    {/* <App7_mui/> */}
    {/* <Db /> */}
    {/* <ReducerComponent/> */}
    {/* <CustomHook/> */}
    {/* <Counter/> */}
    {/* <CssComponent/> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
