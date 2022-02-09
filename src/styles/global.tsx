import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        background: linear-gradient(180deg, #00A7F3 0%, rgba(104, 208, 212, 0.99) 0.01%, #007EF3 100%);
        background-repeat: no-repeat;
        font-family: 'Open Sans', sans-serif;
    }
`;