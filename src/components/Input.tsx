import React from "react";
import { InputWrapper } from '../styles/styles'



interface InputProps{
    question: string;
}

const Input: React.FC<InputProps> = (props) => {
    return(
        <InputWrapper>
            <p> { props.question } </p>
            <div className="generic_container">
                <div></div><input type="text" />
            </div>
        </InputWrapper>
    );
}

export default Input;

