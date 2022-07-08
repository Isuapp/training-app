
import AddTraining from '../components/addTraining/AddTraining';
import arrow from '../assets/brand/icons/arrow.svg';
import IconButton from '../components/iconButton/IconButton';
import { useNavigate } from 'react-router-dom';


const AddTrainigContainer = ()=>{

    const navigate = useNavigate()
    const back =()=>{
        navigate('/');
      }

    return(
        <>
            <IconButton  onClick={back} icon={arrow}/>
            <AddTraining/>
        </>
    )
}

export default AddTrainigContainer;