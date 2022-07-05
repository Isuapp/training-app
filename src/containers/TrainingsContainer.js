import ListTrainings from "../components/ListTrainings/ListTrainings";
import useTrainings from "../hooks/useTrainings";
import { muscles, typologies} from '../utils/variables'
import InputTag from "../components/InputTag/InputTag";
import Modal from "../components/modal/Modal";
import { useModal } from "../context/modalContext";
import { useUser } from '../context/UserContext';
import { deleteTrainingServices, getAllTrainingsService } from '../services';
import { useEffect, useState } from "react";
import FilterTraining from "../components/filterTraining/FilterTraining";
import TrainingMiniCard from "../components/trainingsMiniCard/TraininingMiniCard";
import { useAdmin } from "../context/adminContext";

const Trainings = ()=>{
    
    const [user] = useUser();

    const [admin] = useAdmin();
    const [update, setUpdate] = useState(true);
    /* const [trainings, setTrainings] = useState([]); */


    useEffect(()=>{ },[update])

    const hanldeDeleteTraining = async (e)=>{
        const li = e.target.closest('li');

        const idTraining = li.getAttribute('data-id');

      try {
        await deleteTrainingServices(idTraining, admin);
      } catch (error) {
        console.error(error);
      }

    }
  
    const {
        setMuscleGroup,
        setTypology,
        trainings, 
        loading, 
        error} 
        = useTrainings();

    
    const [modal]=useModal();

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    

    return(
        <main>
            <ul>
                {trainings.map((training)=>(
                    <li key={training.id} data-id={training.id}>
                        <TrainingMiniCard 
                            training={training}
                            handleTrash={hanldeDeleteTraining}
                        />
                    </li>
                ))}
            </ul>
            
            {modal && 
                <Modal>
                    <FilterTraining 
                        onChangeMuscle={(e)=>{setMuscleGroup(e.target.value)}}
                    />
                </Modal>}
        </main>
    )
}

export default Trainings;