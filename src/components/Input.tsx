import React from "react";
import styled from "styled-components";
import icon from  '../assets/losangos.svg'

export const InputWrapper = styled.div`
    width: 284px;
    height: 60px;

    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    margin-bottom: 19px;
    p{
        color: white;
       
        font-style: italic;
        font-size: 16px;

        margin-left: 15px;
    }

    .generic_container{
        display: flex;

        div{
        width: 34px;
        height: 20px;

        background: #007EF3;
        background-image: url(${icon}) ;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 2px;
        
        }

        input{
        width: 252px;

        border: none;
        border-radius: 3px;

        padding-left: 10px;
    
        }

    }




`

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

