import { useEffect, useState } from "react"
import { useAdmin } from "../context/adminContext";
import { useUser } from "../context/UserContext";
import { getSingleTrainingsService } from "../services";


const useTraining = (idTraining)=>{
    const [training, setTraining] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(null);

    const [admin] = useAdmin();
    const [user] = useUser();

    const tokenUser = user.token;

    useEffect(()=>{
        const loadTraining = async ()=>{
            try{
                setLoading(true);

                const data = await getSingleTrainingsService(idTraining, tokenUser);

                setTraining(data);

            }catch (error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }

        loadTraining()

    }, [idTraining])

    return {  training, error, loading, setTraining}
};

export default useTraining;