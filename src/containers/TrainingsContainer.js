import useTrainings from "../hooks/useTrainings";
import Modal from "../components/modal/Modal";
import { useModal } from "../context/modalContext";
import { useUser } from '../context/UserContext';
import { deleteTrainingServices, likesService } from '../services';
import FilterTraining from "../components/filterTraining/FilterTraining";
import TrainingMiniCard from "../components/trainingsMiniCard/TraininingMiniCard";
import { useState } from "react";
import './trainingsContainer.css'

const Trainings = ()=>{
    
    const {
        setMuscleGroup,
        setTypology,
        trainings,
        setTrainings,
        loading,
        error}
        = useTrainings();
    
    const [newTypology, setNewTypology ] = useState('');
    const [newMuscleGroup, setNewMuscleGroup] = useState('');

    const [user] = useUser();

    const tokenUser = user.token

    const hanldeDeleteTraining = async (idTraining)=>{
        if(window.confirm('You want to delete this training?' )){
            try {
                await deleteTrainingServices(idTraining, tokenUser);
                setTrainings(trainings.filter((training)=> training.id!==idTraining))
              } catch (error) {
                console.error(error);
              }
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
      
    const handleFilter = async (e) =>{
        e.preventDefault();
        try{
            setMuscleGroup(newMuscleGroup);
            setTypology(newTypology);
            
        }catch(error){console.error(error)}
    }
    const [modal]=useModal();

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>


    return(
        <section className="trainings">
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
                        onChangeMuscle={(e)=>{setNewMuscleGroup(e.target.value)}}
                        onChangeTypology={(e)=>{setNewTypology(e.target.value)}}
                        handleFilter={handleFilter}
                    />
                </Modal>}
        </section >
    )
}

export default Trainings;