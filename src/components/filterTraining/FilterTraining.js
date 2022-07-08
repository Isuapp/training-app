import './filterTraining.css';

import { muscles, typologies } from "../../utils/variables";


import InputTag from '../InputTag/InputTag';

const FilterTraining = ({onChangeMuscle, onChangeTypology})=>{

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