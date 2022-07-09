import { useNavigate, useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import EditTrainig from "../components/editTraining/EditTraining";
import arrow from '../assets/brand/icons/arrow.svg';
import IconButton from '../components/iconButton/IconButton';
import HeaderUp from "../components/headerUp/HeaderUp";

const EditTrainigContainer = ()=>{

    const {id} = useParams();

    useTraining(id);
    const navigate = useNavigate();
    const back =()=>{
        navigate('/');
      }
    
    return(
        <main>
            <HeaderUp />
            <EditTrainig />
        </main>
    )
}

export default EditTrainigContainer;