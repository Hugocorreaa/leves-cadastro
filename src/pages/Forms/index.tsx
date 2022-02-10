import React from "react";
import LogoContainer from "../../components/LogoContainer";
import Title from '../../components/Title';
import Input from '../../components/Input'
import InputButton from '../../components/InputButtons'
import { SectionLogInpt, InpuButDiv, InputContainer } from '../../styles/styles'


const FirstForm = () => {
  
    return (
      
      <>
        <Title/>
        <SectionLogInpt>
          <LogoContainer/>
          <InputContainer>
            <form action="/form2">
                <input className='nome' type="text" placeholder='Qual o seu nome? (Opcional)'/>
                <Input question="Idade"/>
                <Input question="Gênero"/>
                <Input question="Estado civil"/>
                <InpuButDiv>
                  <InputButton></InputButton>
                </InpuButDiv>
            </form>
          </InputContainer>
        </SectionLogInpt>
      </>

    )
}

export default FirstForm;