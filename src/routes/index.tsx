import React from "react";
import {Routes, Route} from "react-router-dom";
import FirstForm from "../pages/Forms/index"
import SecondForm from "../pages/Forms/form_2"
import ThirdForm from "../pages/Forms/form_3"

const MainRoutes = () => {
    return(
        <Routes>
            <Route  path="/" element={<FirstForm/>}/>
            <Route  path="/form2" element={<SecondForm/>}/>
            <Route  path="/form3" element={<ThirdForm/>}/>
        </Routes>
    )
}

export default MainRoutes;