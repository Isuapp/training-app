
import AddTraining from '../components/addTraining/AddTraining';
import {useHandler } from '../context/HandlerContext';

const AddTrainigContainer = ()=>{

    const [, setHandler] = useHandler();
    setHandler(true)
    return(
        <AddTraining/>
    )
}

export default AddTrainigContainer;