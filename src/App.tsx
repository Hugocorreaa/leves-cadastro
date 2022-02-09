import React from 'react';
import Input from './components/Input'
import Title from './components/Title';
import Logo from './assets/logoleves.png'
import GlobalStyle from './styles/global'
import { SectionLogInpt } from './styles/styles'



function App(){
  return (
    <>
      <Title></Title>
      <SectionLogInpt>
        <div id='logo-container'>
          <img src={Logo} alt="Logo da Leves" />
        </div>
        <div id='input-container'>
          <input id='nome' type="text" placeholder='Qual o seu nome? (Opcional)'/>
          <Input question="Idade"/>
          <Input question="Gênero"/>
          <Input question="Estado civil"/>
        </div>

      </SectionLogInpt>



      <GlobalStyle/>
    </>
  );
}

export default App;
