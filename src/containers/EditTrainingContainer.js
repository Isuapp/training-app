import { useNavigate, useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import EditTrainig from "../components/editTraining/EditTraining";
import arrow from '../assets/brand/icons/arrow.svg';
import IconButton from '../components/iconButton/IconButton';

const EditTrainigContainer = ()=>{

    const {id} = useParams();

    useTraining(id);
    const navigate = useNavigate();
    const back =()=>{
        navigate('/');
      }
    
    return(
        <main>
            <IconButton  onClick={back} icon={arrow}/>
            <EditTrainig />
        </main>
    )
}

export default EditTrainigContainer;