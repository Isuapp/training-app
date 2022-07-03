import { useEffect, useState } from "react"
import { useAdmin } from "../context/adminContext";
import { useToken } from "../context/TokenContext";
import { getSingleTrainingsService } from "../services";


const useTraining = (idTraining)=>{
    const [training, setTraining] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(null);

    const [admin] = useAdmin();
    const [token] = useToken();

    const authorization = token? token : admin;

    useEffect(()=>{
        const loadTraining = async ()=>{
            try{
                setLoading(true);
                console.log('idTraining',idTraining);
                const data = await getSingleTrainingsService(idTraining, authorization);

                setTraining(data);
        
            }catch (error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        } 

        loadTraining()

    }, [idTraining])

    return {  training, error, loading}
};

export default useTraining;