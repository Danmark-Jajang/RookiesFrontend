# React 개요
    - 개발언어
        - Javascript
            - *.js
            - ES Next 문법 -> babel -> 호환코드로 변환 -> html에 포함(external)
            - 위의 과정을 빌드(build)라고 함
        - Typescript
            - *.ts
            - type + ES Next 문법 -> 트랜스컴파일(문법변환) -> ES Next -> babel -> 호환코드로 변환 -> html에 포함
            - 위의 과정을 빌드(build)라고 한다

        - 문법의 범위
            - TS > ES Next > ES5
            - 어떤 언어로 개발하던 결국 ES5 / ES6로 돌아간다
                - 그 상위의 언어는 생산성 향상을 위해 사용하는 것
                - 어떤 버전으로 사용하든 빌드를 통해 버전을 맞춰야한다
    
    - 제작사
        - meta(구 facebook)

    - 현재 개발 포지션
        - 전자정부 프레임워크
            - https://github.com/eGovFramework/egovframe-template-simple-react
        - 기타 사용 빈도
            - https://trends.stackoverflow.co/?tags=angular,vue.js,reactjs,jquery
                - 현재 1위 : react
            - https://tsh.io/state-of-frontend/
                - 트랜드 및 같이 언급되는 기술들
                - react / nextjs
                    - next.js는 react기반드로 백엔드를 구성할 수 있다
                    - typescript 형태로 주로 개발됨

    - SPA
        - Single Page Application
            - html이 1개 존재
            - 사용자 인터렉션에 맞춰 화면을 갱신(페이지 변환, 동적구성)
                - 특정 요소를 타겟으로 다양한 비즈니스를 렌더링, 처리
            - 10개의 화면이 있더라도 개발자 관점에서는 html이 1개
            - 프레임워크
                - react > angulra , vue(최근 중/대기업에서 요구)
                - vue는 앞선 기술을 기반으로 발전

    - 특징
        - react 사용 이유
            - react를 사용하는 개발자가 많다
            - 강력한 스폰서(meta)
            - 웹, 앱(react native), PC기반(electron 사용)
            - ...매우 많은 이유가 있다
        - 기술적
            - 페이지 전환 : 라우팅
            - 페이지간 데이터 공유
                - 명시적 단방향 관리 (순환구조)
                - vue는 양방향으로 관리하여 자유도가 높음
            - JSX(Javascript XML) 지원
                - html + js 결합 구조
                - 화면 구성, 내용, 인터렉션
            - 강력한 서드파트 라이브러리, 이식성이 강함
                - npmjs.com
            - Hook
                - 해당 개념이 도입 -> 객체지향적에서 '함수지향적'으로 전환
            - ...
                - 앱/웹을 구성하는데 필요한 모든 생태계가 준비되어있다

        - history
            - 2010~2015
                - 개발시도 -> 페이스북, 인스타그램  적용 시도
                - 애플의 앱규제 정책이 트리거 -> 자체적인 플랫폼이 필요했다
                - html5, css3, js발전 등
                - 실패
                - 인스타그램 인수 후 적용 시 웹으로 개발을 목표로 하였고, react, jsx등 개념 도입
            - 2016년 이후
                - 인스타그램 적용
                - 넷플릭스 적용 -> 프런트앤드 시장 확산
            - 국내
                - 토스, 카카오, 네이버, 네이버지도, ...
                    - 2020이후 많이 채택
                    - react + django 많이 사용 <- JS, python
                - 지도 플랫폼은 대부분 적용

# next.js
    - react기반 개발
    - 기존 프런트앤드는 CSR중심
    - next.js도입하여 SSR을 사용할 수 있게 지원
        - 유사 제품도 많다
    - react / next.js 둘을 주로 묶는다
        - Spingboot와 next.js는 충돌점이 많음
        - 차후 프로젝트 사용시 next.js 사용시 포지션 정리 필요

# 개발 환경 구축
    - 공홈
        - https://react.dev/
            - 웹 프런트엔드 - react / reactjs   
            - 앱(ios, android) - react native
            - 학습, api문서 제공, 개발 권장 방식은 없음
                - API개선, 함수지향적으로 바뀜
    - 개발환경
        - 온라인 플랫폼
            - https://codepen.io/pen
            - https://codesandbox.io/p/sandbox/new?file=%2Fpublic%2Findex.html%3A15%2C56
            - https://stackblitz.com/edit/react-jsztca?file=src%2FApp.js

        - 로컬환경
            - html내에서 묘사 <- 환경/방식에 익숙해지는 과정
                - CDN방식 설치 -> 실제 개발은 안할거임
                ```
                <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
            < src="https://unpkg.com/@babel/standalone/babel.min.js"></   script>
                ```
            - nodejs기반 react 웹구성 <- 최종 형태
                - npm방식 설치


# basic-CDN
    - html기반에서 CDN방식으로 react 설치
    - 기본적인 react 구동 매커니즘 이해
    - React Developer Tools 설치
        - https://react.dev/learn/react-developer-tools
    
    - 리액트 구동 매커니즘 이해
    - 커스텀 컴포넌트 구성
        - 함수형, 객체형
        - props, state, 이벤트 처리
        - 화면갱신 매커니즘 ( 상태변수 업데이트 -> 화면갱신 )
    - JSX 구성규칙
        - html은 소문자, 커스텀 컴포넌트 첫글자 대문자
        - 루트필요, 오버랩 금지
        - ()... 

# app-npm
    - 리액트를 이용하여 frontend 앱/웹을 구성하는 방식
    - nodejs 기반
    - npm : nodejs의 패키기 관리자
        - yarn 제품도 사용
        - 타언어/OS
            - mac : brew
            - Linux : apt
            - python : pip, conda
        - 용도
            - 패키지 설치 및 관리
    - 리액트 앱을 기본적으로 생성하는 제품
        - CLI방식으로 구동됨
        - create-react-app
            - https://www.npmjs.com/package/create-react-app
            - 설치
               - npm i create-react-app -g
                    - i : install / -g : global, OS어디서든
            - 사용이유
                - 기본 프로젝트 뼈대가 간결하다
                - 차후 좀더 많은 기능이 들어간 보일러 플레이트 사용
                    - 기본 프로젝트 구조, 명령어, 포멧터,...
    - 프로젝트 생성
        - 적절한 위치로 이동
        - /Users/kimminseok/FrontEnd/react/app-npm
        - npx create-react-app demo
    - 프로젝트 구동
        - cd demo
        - npm start(1회성)
        - 중단 : ctrl + c
        - react version이 19로 올라가면서, 설정의 문제가 좀 생김
            - create-react-app 관리 문제일 수 있음  
            - package.json파일 -> dependencies -> "web-vitals": "^4.2.4" 추가
            - web-vitals 수동설치
                - npm install web-vitals
                - 이때 명령어 실행 주소 확인
                    - react/app-npm/demo 에서 수행
    - 프로젝트 구조
        - tree구조
            - node_modules : 프로젝트에 필요한 라이브러리 위치, npm install 명령 후 설치됨
            - .gitignore : git에 올리지 않는 파일 기제
                    node_modules는 반드시 추가하여 올라가지 않게 한다
            - package.json : 프로젝트에 대한 메타정보 기술, 명령어, 메타정보, 라이브러리 등 기술, 프로젝트 체크시 가장 먼저 검토.

            - public/index.html : spa관점에서의 1개의 html이 됨
            - src/App.js : 커스텀 컴포넌트
            - src/App.css : 커스텀 컴포넌트의 css
            - src/App.test.js : 단위 테스트용
            - src/index.js : react 메인코드, 기본구성
            - src/index.css : 메인 css

# package.json
    - nodejs계열 프로젝트의 구조에서 가장 먼저 봐야함
    - dependencies : 서드 파트 라이브러리, npm install 명령어에 의해 설치됨
        - create-react-app이 알아서 설치해준거
        - 라이브러리 설치
            - 목표 : dependencies에 적혀있어야하고, 설치되어야 함
            - 명령어 하나로 다 설치할 수 있지만 일단 나중에
        - sendbox 모델 -> 외부에서 사용불가, 프로젝트 내부서만 가능

    - script : 명령어
        - ex
            - "start": "react-script start"
            - terminal에서 "npm [run] start"로 작성
        - 빌드 예시
            - "build": "react-script build"
            - terminal에서 "npm run build"로 작성
            - 프로젝트 내부에 build 폴더가 생성되어 배포파일이 된다
                - *.html, *.css, *.js, 리소스, 폴더
                - 백엔드에 배포하거나 단독서버구동 배포용

# ES Module (ESM) 방식
    - 프로젝트 생성(node 프로젝트 기본)
        - 원하는 작업 폴더 이동
            - mkdir esm / cd esm
        - 프로젝트 생성
            - npm init
                - package.json 생성과정
                    - 질의 - enter
        - 개발
            - *.js 생성
        - 응용
            - 위의 과정을 한개의 명령어로 모두처리 + 필요한 템플릿 제공
            - ex) create-react-app, ... or 보일러플레이트
    - 모듈 (*.js) 가져오기
        - 목적
            - 다른 개발자가 만든 모듈을 가져와 
    - node = 모듈 + 디렉토리(같은 유형의 모듈을 묶어둔 그룹)
        - ESM 문법
            - import App from '모듈이름|상대경로+커스텀모듈';
                - 모듈이름 : 서드파트 모듈, npmjs에서 검색되는 것
                    - from 'react'; <- 서드파트모듈중 react에서...
                - 상대경로+커스텀모듈 : 직접만든모듈
                    - './App' <- 현재 작성중인 코드와 같은 경로에 있는 App.js를 찾아라
        - import App
            - 가져온 모듈을 특정 이름으로 대체(별명)
                - import App from './App';
            - 통상적으로 파일명과 동일하게 구성한다
        - import {A, B, C} from './xx';
            - 개별 모듈 가져오기
            - 출처에서 모듈화된 개별 모듈을 가져오는 표현
    - ESM 문법 (모듈화)
        - 대표 모듈
            - export default 컴포넌트명;
                - 코드 가장 마지막줄에 표현
                - 외부에서도 모듈로 가져와 사용할 수 있도록 설정

# 컴포넌트의 생명주기
    - 목적
        - 컴포넌트의 생애주기 이해
        - 객체형 컴포넌트 사용(여기서만 확인가능)
        - 함수형 컴포넌트는 사용불가
            - 16버전 이후 추가된 '훅'에서 대체처리가 가능
    - 구조
        - App.js에 LifeCycle컴포넌트를 모듈 가져오기를 하여 추가
    - 구성
        - src/LifeCycle.js 생성

# 커스텀 컴포넌트 구현
    - npm 기반
    - ~/src/MyInput.js 생성
        - input태그를 커스텀하여 특정 기능을 갖는 입력요소를 구성
        - 객체형 컴포넌트
    - 기본형태
    ```
        // 1. 모듈 가져오기
        import React, {Component} from "react"; 

        // 2. 커스텀 컴포넌트 구현 (객체형)
        class MyInput extends Component {
            constructor(props){
                super(props);
            }

            render(){
                return (
                    <>
            
                    </>
                );
            }
        }

        // 3. 커스텀 컴포넌트의 대표 모듈화
        export default MyInput;
    ```

# 훅(Hook)
    - 리액트 16에서 추가된 기능
    - 함수형 컴포넌트에 훅이 추가 -> 리액트 개발 방식 전환
    - 훅
        - 함수형 컴포넌트에 객체형 컴포넌트의 기능을 비슷하게 대체처리
        - 생애주기함수(함수형에는 없는 기능)
    - 종류
        - 제공되는 기본 훅
        - 커스텀 훅 -> 대부분 라이브러리에서 응용
    - 프로젝트 새로 생성
        - hook-test
        - npm
        - ~/react/app-npm/hppk-test

# hook-test
    - 훅 연습
    - 함수형 컴포넌트 연습 - 세션 1 프로젝트 프런트엔드 최종개발 형태

# 기타
    - 네트워크 처리 - ajax(fetch, axios, ..)
    - 라우팅 - 페이지 이동, 페이지간 데이터 전달
    - 페이지간 데이터 공유, 관리 - 1세대:redux ~ 3세대:??
        - 전역적 데이터 관리
        - 상위 컴포넌트 -> 하위컴포넌트 공유 - useContext
        - 관계없는 컴포넌트가 동일한 데이터를 보고, 제어, 갱신을 처리(공유)
            - flux(시초) -> redux(1세대) -> mobx(2세대) -> zustand(다양한 제품이 더 있음)
            - 기본개념은 유사하고, 사용편의성
        - zustand
            - 전역 상태관리 솔루션(state-management solution)
            - useReducer와 비슷함
            - 실습
                - src/state/*.js
            - npm install zustand
                - 설치하고 package.json갱신되었는지 잘 확인하기
    - 템플릿 적용 - UI, Design
        - material 디자인(Android폰에 적용된 지다인)
        - mui.com
    - 빌드 - 최종형태, 단독서비스 <-> 백엔드 or 백엔드 포함

    - useReducer
    - 커스텀 훅
        - 만흔 개발사에서 자체개발로 개발중(자체 라이브러리 개발용)
    - 다양한 css 적용
        - css 직접 적용
        - CSS Modules 방식
        - 서드파트 라이브러리
            - css styled-component 방식
            - emotion 라이브러리 적용(mui 컴포넌트가 사용하는 방식)
            - tailwind 라이브러리 적용
                - 'px-2 py-1 bg-red hover:bg-dark-red'
                - 스타일을 나열하듯이 작성
                - 용어는 재구성되어있음
            - *.scss | sass
                - npm install scss sass
                - npm install resolve-url-loader sass-loader --save-dev
        - ~/src/css/ *.js

# 라우팅
    - 리액트의 페이징 처리
        - URL을 요청하면 -> 특정 페이지가 처리되게 구성
        - react-router-dom => react-router
    - 프로젝트 생성
        - 현재 디렉토리 : ~/app-npm
        - npx create-vite@latest
            - create-vite <-> create-react-app
                - 프로젝트를 생성하는 템플릿 모듈
                ✔ Project name: … route-app
                ✔ Select a framework: › React
                ✔ Select a variant: › JavaScript + SWC
                트랜스컴파일러
                    - SWC <-> Babel (빌드시 사용됨)
                    - Speedy Web Compiler, 속도와 성능에 초점을 맞춘 컴파일러
    - cd route-app
    - (npm i react-router) : 라우터가 없을 때 사용하는 것
    - npm install : package.json에 정의된 독립모듈 설치
    - npm run dev

    - vite
        - 프런트엔드 빌드 툴
        - SWC와 연계하여 작동
        - 개발 서버 가동, 수정시 빠른 재가동(반영)
        - Typescript / next.js -> vite사용

    - 빌드 - 최종 서비스 형태
        - npm run build

    - 최종 결과문
        - dist
            - index.html
            - 리소스
            - assets
                - *.js
                - *.css

# AVD
    - Typescript 업그레이드
    - next.js 이식

# 기본형
    - 함수형 컴포넌트 사용
    - 프로젝트 템플릿
        - npx create-vite@latest 에서 진행
    - 절차
        - 요구사항 맞게 페이지 배치
        - 개별 페이지에서 요구사항 구현
            - 훅 중심사용
                - useState, useEffect, useRef,...
            - 통신 axios정도 사용
    - 기타
        - 페이지가 계속 이어지면서 데이터를 화면별로 들고있어야 한다면 전역상태관리가 들어가야함