import styled from "styled-components";
import icon from  '../assets/losangos.svg'


export const DivTitle = styled.div`
        color: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-top: 57px;

        h1{
            font-size: 36px;
            font-weight: 600;
        }

        h2{
            font-size: 14px;
            font-weight: 600;
        }
`;

export const SectionLogInpt = styled.section`
    height: 82vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo-container{
        margin-left: 14%; 
    }
`

export const InputContainer = styled.div`
        width: 333px;

        margin-right: 18%;

        .nome{
            width: 331px;

            background: none;
            border: none;
            border-bottom: 1px solid white;

            padding-left: 10px;
            padding-bottom: 3px;

            margin-bottom: 27px;

            &::placeholder{
                color: white;

                font-family: Open Sans;
                font-style: italic;
                font-size: 16px;
            }
        }


`

export const InputWrapper = styled.div`
    width: 350px;
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

export const InputButtons = styled.input`
    height: 26px;
    width: 86px;

    background: #007EF3;

    border: #007EF3;
    border-radius: 6px;


    color: #FFFFFF;

    cursor: pointer;

    font-family: Open Sans;
    font-weight: 600;
    font-size: 16px;
    

`

export const InpuButDiv = styled.div`
    display: flex;
    justify-content: right;
    gap: 9px;

    padding-top: 25px;

`