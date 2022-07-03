import ListTrainings from "../components/ListTrainings/ListTrainings";
import useTrainings from "../hooks/useTrainings";
const Trainings = ()=>{

    const {trainings, loading, error} = useTrainings();

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    return(
        <main>
            <ListTrainings  trainings={trainings}/>
        </main>
    )
}

export default Trainings;