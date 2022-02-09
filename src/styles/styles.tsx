import styled from "styled-components";

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

    #input-container{
        margin-right: 18%;

        #nome{
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
    }


`

