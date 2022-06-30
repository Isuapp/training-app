import { useEffect, useState } from "react"
import { useAdmin } from "../context/adminContext";

const EditTrainig = ()=>{

    const [idTraining, setIdTraining] = useState();
    const [admin] = useAdmin();

    const handleEditTraining = async(e)=>{
        
        
        const res = await fetch(`http://localhost:4000/trainings/${idTraining}`,{
            method:'PUT',
            headers:{
                Authorization:admin
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