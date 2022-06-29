

import Login from "../components/login/Login";
import { useState } from "react";
import Register from "../components/register/Register";

const Landing = ()=>{

    const [registered, setRegistered] = useState(true);

    return(
        <>
            {registered &&  <Login move={()=>{setRegistered(false)}}/>}
            {!registered && <Register move={()=>{setRegistered(true)}}/>}
        </>
    )
}

export default Landing;