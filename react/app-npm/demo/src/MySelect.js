import React, {Component} from 'react'

class MySelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            selLang:this.props.initValue
        }
    }

    render(){
        const {languages, initValue} = this.props;
        const options = languages.map((languages, index)=>{
            return (<option value={languages} key={index}>{languages}</option>);
        });

        const onChangeHandler = evt => {
            // 사용자가 선택한 값으로 select값 변경
            // 선택 -> 변경 -> 상태변수 변경 -> render() -> 갱신
            this.setState({selLang:evt.value});
        }
        
        const {selLang} = this.state;

        return(
            <>
                <div>
                    <select value={selLang}
                        onChange={onChangeHandler}>
                        {options}
                    </select>
                    <br/>
                    <br/>
                    {/*
                        커스텀 컴포넌트를 사용하여 select를 커스텀
                            - 요구사항 : MySelect의 컴포넌트로 전달된 props에
                                languages를 사용해 select구성
                    */}
                </div>
            </>
        );
    }
}

export default MySelect;