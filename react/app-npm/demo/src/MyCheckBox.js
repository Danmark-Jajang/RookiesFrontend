import React, { Component } from "react";

class MyCheckBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            checked : false
        }
    }

    render(){
        const {label} = this.props;
        const {checked} = this.state;
        return (
            <>
                <input type='checkbox'
                    checked={checked}
                    onChange={()=>{
                        this.setState({checked:!checked})
                    }}/> {label}
            </>
        );
    }
}

export default MyCheckBox;