import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/index";
import GlobalStyle from './styles/global'




const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes/>
      <GlobalStyle/>
    </BrowserRouter>

  );
}

export default App;
