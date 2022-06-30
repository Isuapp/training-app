import { useEffect, useState } from "react"
import { useToken } from "../context/TokenContext";

const EditTrainig = ()=>{

    const [idTraining, setIdTraining] = useState();
    const [token, setTokenInLocalStorage] = useToken();

    const handleEditTraining = async(e)=>{
        
        
        const res = await fetch(`http://localhost:4000/trainings/${idTraining}`,{
            method:'PUT',
            headers:{
                Authorization:token
            },
        });
        const body = await res.json();
        console.log('Body:',body);
    }
    
    useEffect(()=>{handleEditTraining()},[])
    return(
        <main>
            <form onSubmit={handleEditTraining}>
                
            </form>
        </main>
    )
}

export default EditTrainig;