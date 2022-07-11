import { useEffect, useState } from "react"
import { useUser } from "../context/UserContext";
import { getAllTrainingsService } from "../services";

const useTrainings =()=>{

    const [trainings, setTrainings] = useState([]);
    const [typology, setTypology] = useState('')
    const [muscleGroup, setMuscleGroup] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const [user] = useUser();

    
    
    useEffect(()=>{
        const getAllTrainings = async  ()=>{
            try{
                setLoading(true);
                const data = await getAllTrainingsService(typology, muscleGroup, user.token);
                setTrainings(data)
                setLoading(false);
            }catch (error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        };

        getAllTrainings();
    }, [typology, muscleGroup, setTypology, setMuscleGroup, setTrainings ])

    return {typology, muscleGroup, setTypology ,setMuscleGroup , trainings, setTrainings, loading,error}
}

export default useTrainings;