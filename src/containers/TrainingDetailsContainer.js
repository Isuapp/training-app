import './trainingDetailsContainer.css';

import { useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import Training from "../components/training/Training";

const TrainingDetails = ()=>{
    const {id} = useParams();

    const {training, loading, error, setTraining} = useTraining(id);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>


    return(
        <section>
           <Training
                setTraining={setTraining}
                training={training}
           />
        </section>
    )
}

export default TrainingDetails;