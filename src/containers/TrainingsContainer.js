import useTrainings from "../hooks/useTrainings";
import Modal from "../components/modal/Modal";
import { useModal } from "../context/modalContext";
import { useUser } from '../context/UserContext';
import { deleteTrainingServices, likesService } from '../services';
import FilterTraining from "../components/filterTraining/FilterTraining";
import TrainingMiniCard from "../components/trainingsMiniCard/TraininingMiniCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Trainings = ()=>{
    
    const navigate = useNavigate()
    const {
        setMuscleGroup,
        setTypology,
        trainings,
        setTrainings,
        loading, 
        error} 
        = useTrainings();

    const [user] = useUser();


    const hanldeDeleteTraining = async (idTraining)=>{
        
        const tokenUser = user.token

      try {
        await deleteTrainingServices(idTraining, tokenUser);
      } catch (error) {
        console.error(error);
      }

    }
    const handleLikes =async (idTraining)=>{
        try {

            const tokenUser = user.token;
          
            const data = await likesService(idTraining, tokenUser)

            console.log(data)
          
        } catch (error) {
          console.error(error)
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
                        handleTrash={()=>{hanldeDeleteTraining(training.id)}}
                        handleLikes={()=>{handleLikes(training.id)}}
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