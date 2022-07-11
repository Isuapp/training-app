import './filterTraining.css';

import { muscles, typologies } from "../../utils/variables";


import InputTag from '../InputTag/InputTag';

const FilterTraining = ({onChangeMuscle, onChangeTypology, handleFilter})=>{

    return(
        
        <form className='filter-form' onSubmit={handleFilter}>
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
       {/*               <select name='MuscleGroup' onChange={onChangeMuscle}>
                {
                    muscles.map(muscle=>(
                        <option key={muscle.id} value={muscle.name} >{muscle.name}</option>
                    ))
                }
            </select> */}
                
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

            {/* <select name='typologies' onChange={onChangeTypology}>
                {
                    typologies.map(type=>(
                        <option key={type.id} value={type.name} >{type.name}</option>
                    ))
                }
            </select> */}
            </div>
        </div>
        <button>filter</button>
    </form>
    )
}

export default FilterTraining;