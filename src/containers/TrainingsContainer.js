import ListTrainings from "../components/ListTrainings/ListTrainings";
import { useToken } from "../context/TokenContext";
import useTrainings from "../hooks/useTrainings";

const Trainings = ()=>{

    const {trainings, loading, error} = useTrainings();
    const [token] = useToken();
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    
    return(
        <main>
            <ListTrainings  trainings={trainings}/>
        </main>
    )
}

export default Trainings;