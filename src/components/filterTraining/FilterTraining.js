import './filterTraining.css';

import { useParams } from "react-router-dom";
import {useAdmin} from '../../context/adminContext'
import {useUser} from '../../context/UserContext'
import { muscles, typologies } from "../../utils/variables";


import InputTag from '../InputTag/InputTag';
import useTrainings from '../../hooks/useTrainings';

const FilterTraining = ({onChangeMuscle, onChangeTypology})=>{


    const {
        typology, 
        muscleGroup, 
        setTypology, 
        setMuscleGroup ,
        trainings, 
        loading, 
        error} 
        = useTrainings();    
    
    const [admin, setAdmin] = useAdmin();
    const [ user, setUser] = useUser();

   

    return(
        
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
                        onChange={onChangeMuscle}
                        idMuscle={muscle.id}
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
                        onChange={onChangeTypology}
                    />
                )
            })}
            </div>
        </div>
        <button>filter</button>
    </form>
    )
}

export default FilterTraining;