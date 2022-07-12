
import './addTrainingContainer.css'

import AddTraining from '../components/addTraining/AddTraining';
import { useNavigate } from 'react-router-dom';


const AddTrainigContainer = ()=>{

    const navigate = useNavigate()
    const back =()=>{
        navigate('/');
      }

    return(
        <section>
            <AddTraining/>
        </section>
    )
}

export default AddTrainigContainer;