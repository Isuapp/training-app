import { Link, useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import {useHandler } from '../context/HandlerContext';

import Training from "../components/training/Training";

import { likesService } from "../services";
import { useAdmin } from "../context/adminContext";
import { useToken } from "../context/TokenContext";

const TrainingDetails = ()=>{
    const {id} = useParams();
    console.log('USEPARAMS', id);


    const [, setHandler] = useHandler();
    setHandler(true);
    const {training, loading, error} = useTraining(id);
    const [admin] = useAdmin();
    const [token] = useToken();
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    const handleLikes =async (like)=>{
        try {

            const authorization = token? token : admin;
            console.log(like, authorization);
          
            const data = await likesService(like, authorization)

            console.log(data)
          
        } catch (error) {
          console.error(error)
        }
      }
    return(
        <main>
           <Training 
                training={training} 
                likes={()=>{handleLikes(training.id)}}
           />
           <Link to='/trainings'>Go back trainings</Link>
        </main>
    )
}

export default TrainingDetails;