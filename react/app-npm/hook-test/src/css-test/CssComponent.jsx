/**
 * 여러 유형의 css적용 스타일 컴포넌트
 */
import myStyle from "./index"; //파일명이 index라면 이름을 .(점 하나)로 써도 된다
import styled from "styled-components";

import './styles.scss';

// styled-component 방식 (npm i styled-components)
//  Title 컴포넌트를 생성하는데, 스타일을 가지고 있음, 문법만 다르게 2가지 방법
const Title = styled.h2`
    color: red;
`
const Button = styled.button({color:"pink"});

// scss, sass - 리소스를 만들고 적용

function CssComponent(){
    return (
        <div>
            <h3>CSS 적용 테스트</h3>
            <div style={{backgroundColor:"lightgray", margin:"1em", padding:"1em"}}>
                inline방식 CSS적용
            </div>
            <div style={myStyle.styleDiv}> 
                CSS Modules 적용 방식, 별도의 JS로 작성하여 적용
            </div>
            <div>
                <Title>Styled-components 적용 방식</Title>
                <Button>Styled button</Button>
            </div>
            <div className="title" >
                scss, sass 방식
            </div>
        </div>
    );
}

export default CssComponent;