import { useAdmin } from "../context/adminContext";
import { useToken } from "../context/TokenContext";
import { useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import EditTrainig from "../components/editTraining/EditTraining";

const EditTrainigContainer = ()=>{

    const {id} = useParams();

    const {training, loading, error} = useTraining(id);

    
    return(
        <main>
         <EditTrainig />
        </main>
    )
}

export default EditTrainigContainer;