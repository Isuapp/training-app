

import Login from "../components/login/LoginContainer";
import { useEffect, useState } from "react";
import Register from "../components/register/RegisterContainer";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/adminContext";
import { useToken } from "../context/TokenContext";


const Landing = ()=>{

    const [admin] = useAdmin();
    const [token] = useToken();
    const navigate = useNavigate();
    const [registered, setRegistered] = useState(true);
    useEffect(()=>{
        if(token|| admin ) navigate('/trainings');
    })
    

    return(
        <>
            {registered &&  <Login move={()=>{setRegistered(false)}}/>}
            {!registered && <Register move={()=>{setRegistered(true)}}/>}
        </>
    )
}

export default Landing;