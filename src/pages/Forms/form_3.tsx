import React from "react";
import LogoContainer from "../../components/LogoContainer";
import Title from "../../components/Title";
import Input from '../../components/Input'
import { InpuButDiv, SectionLogInpt, InputContainer } from '../../styles/styles'
import InputButton from "../../components/InputButtons";


const ThirdForm = () => {
    return(
        <>
            <Title/>
            <SectionLogInpt>
            <LogoContainer/>
            <InputContainer>
                <form action="/form3">
                <Input question="Quando você ingressou na Instituição?" />
                    <Input question="Carreira" />
                    <Input question="Se você é 'técnico-administrativo em educação' informe o seu cargo" />
                    <Input question="Onde você está lotado?" />
                    <InpuButDiv>
                    <InputButton></InputButton>
                    </InpuButDiv>
                </form>
            </InputContainer>
            </SectionLogInpt>
        </>
        
    )

}

export default ThirdForm;