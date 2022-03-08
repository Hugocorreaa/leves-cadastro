import React from "react";
import LogoContainer from "../../components/LogoContainer";
import Title from "../../components/Title";
import Input from '../../components/Input'
import { InpuButDiv, SectionLogInpt, InputContainer } from '../../styles/styles'
import InputButton from "../../components/InputButtons";


const SecondForm = () => {
    return(
        <>
            <Title/>
            <SectionLogInpt>
            <LogoContainer/>
            <InputContainer>
                <form action="/form3">
                <Input question="É gestante (está grávida)?" />
                    <Input question="Você tem filhos?" />
                    <Input question="Lactante (amamenta)?" />
                    <Input question="A qual instituição você está vinculado?" />
                    <InpuButDiv>
                        <InputButton></InputButton>
                    </InpuButDiv>
                </form>
            </InputContainer>
            </SectionLogInpt>
        </>
        
    )

}

export default SecondForm;