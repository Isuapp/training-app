import ListTrainings from "../components/ListTrainings/ListTrainings";
import useTrainings from "../hooks/useTrainings";
import { muscles, typologies} from '../utils/variables'
import InputTag from "../components/InputTag/InputTag";

const Trainings = ()=>{
    
    const {
        typology, 
        muscleGroup, 
        setTypology, 
        setMuscleGroup , 
        trainings, 
        loading, 
        error} 
        = useTrainings();

    
    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
    
  
 
    return(
        <main>
            <ListTrainings  trainings={trainings}/>
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
        </main>
    )
}

export default Trainings;