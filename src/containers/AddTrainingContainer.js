
import AddTraining from '../components/addTraining/AddTraining';
import arrow from '../assets/brand/icons/arrow.svg';
import IconButton from '../components/iconButton/IconButton';
import { useNavigate } from 'react-router-dom';
import HeaderUp from '../components/headerUp/HeaderUp';


const AddTrainigContainer = ()=>{

    const navigate = useNavigate()
    const back =()=>{
        navigate('/');
      }

    return(
        <>
            <HeaderUp/>
            <AddTraining/>
        </>
    )
}

export default AddTrainigContainer;