import { Link, useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import {useHandler } from '../context/HandlerContext';

import Training from "../components/training/Training";

import { likesService } from "../services";
import { useAdmin } from "../context/adminContext";
import { useUser } from "../context/UserContext";

const TrainingDetails = ()=>{
    const {id} = useParams();
    console.log('USEPARAMS', id);


    const [, setHandler] = useHandler();
    setHandler(true);
    const {training, loading, error} = useTraining(id);
    const [admin] = useAdmin();
    const [user] = useUser();
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>


    return(
        <main>
           <Training 
                training={training} 
           />
        </main>
    )
}

export default TrainingDetails;