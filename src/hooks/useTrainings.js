import { useEffect, useState } from "react"
import { useAdmin } from "../context/adminContext";
import { useToken } from "../context/TokenContext";
import { getAllTrainingsService } from "../services";

const useTrainings =()=>{

    const [trainings, setTrainings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [admin] = useAdmin();
    const [token] = useToken();

    const authorization = token? token : admin;
    
    useEffect(()=>{
        const getAllTrainings = async  ()=>{
            try{
                setLoading(true);
                const data = await getAllTrainingsService(authorization);
                setTrainings(data)
                setLoading(false);
            }catch (error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        };

        getAllTrainings();
    }, [])

    return {trainings,loading,error}
}

export default useTrainings;