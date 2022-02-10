import React from "react";
import { InputButtons } from "../styles/styles";

const InputButton = () => {
    return(
        <>
            <InputButtons type="button" value="voltar"></InputButtons>
            <InputButtons type="submit" value="próximo"></InputButtons>
        </>
    )
}

export default InputButton;