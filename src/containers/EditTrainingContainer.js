import { useNavigate, useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import EditTrainig from "../components/editTraining/EditTraining";
const EditTrainigContainer = ()=>{

    const {id} = useParams();

    useTraining(id);
    const navigate = useNavigate();
    const back =()=>{
        navigate('/');
      }
    
    return(
        <main>
            <EditTrainig />
        </main>
    )
}

export default EditTrainigContainer;