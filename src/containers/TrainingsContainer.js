import ListTrainings from "../components/ListTrainings/ListTrainings";
import useTrainings from "../hooks/useTrainings";
import { muscles, typologies} from '../utils/variables'
import InputTag from "../components/InputTag/InputTag";
import Modal from "../components/modal/Modal";
import { useModal } from "../context/modalContext";
import { useAdmin } from '../context/adminContext';
import { deleteTrainingServices } from '../services';
import { useEffect, useState } from "react";

const Trainings = ()=>{
    
    const [admin] = useAdmin();
    const [update, setUpdate] = useState(true);


    useEffect(()=>{ },[update])
    const {
        typology, 
        muscleGroup, 
        setTypology, 
        setMuscleGroup , 
        trainings, 
        loading, 
        error} 
        = useTrainings();

    
    const [modal]=useModal();
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    

    const hanldeDeleteTraining = async (e)=>{
        const li = e.target.closest('li');

        const idTraining = li.getAttribute('data-id');

      try {
        await deleteTrainingServices(idTraining, admin);
        setUpdate(!false)
      } catch (error) {
        console.error(error);
      }

    }
  
    return(
        <main>
            <ListTrainings  
                trainings={trainings}
                handleTrash={hanldeDeleteTraining}
            />
            <form className='filter-form' >
            <div>
                <h4>Muscle Group</h4>
                <div>
                    {muscles.map(muscle=>{
                        return(
                         <InputTag
                            key={muscle.id}
                            name='muscleGroup'
                            keyword={muscle.name}
                            onChange={(e)=>{setMuscleGroup(e.target.value); console.log('muscleGRoup', muscleGroup)}}
                         />
                        )
                    })}
                    
                </div>
            </div>

            <div>
                <h4>Typology</h4>
                <div>
                {typologies.map(type=>{
                    return(
                        <InputTag
                            key={type.id}
                            name='typology'
                            keyword={type.name}
                            onChange={(e)=>{setTypology(e.target.value); console.log('typology', typology)}}
                        />
                    )
                })}
                </div>
            </div>
            <button>filter</button>
            </form>
        {modal && <Modal>{modal}</Modal>}
        </main>
    )
}

export default Trainings;