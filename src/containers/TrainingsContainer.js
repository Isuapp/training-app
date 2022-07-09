import useTrainings from "../hooks/useTrainings";
import Modal from "../components/modal/Modal";
import { useModal } from "../context/modalContext";
import { useUser } from '../context/UserContext';
import { deleteTrainingServices } from '../services';
import FilterTraining from "../components/filterTraining/FilterTraining";
import TrainingMiniCard from "../components/trainingsMiniCard/TraininingMiniCard";
import { useState } from "react";

const Trainings = ()=>{
    
    const [user] = useUser();

    const {
        setMuscleGroup,
        setTypology,
        trainings, 
        setTrainings,
        loading, 
        error} 
        = useTrainings();

    const hanldeDeleteTraining = async (e)=>{
        const li = e.target.closest('li');

        const idTraining = li.getAttribute('data-id');
        const tokenUser = user.token

      try {
        await deleteTrainingServices(idTraining, tokenUser);
      } catch (error) {
        console.error(error);
      }

    }
  
    
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
                        onChangeTypology={(e)=>{setTypology(e.target.value)}}
                    />
                </Modal>}
        </main>
    )
}

export default Trainings;