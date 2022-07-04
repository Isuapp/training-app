import { useAdmin } from "../context/adminContext";
import { useHandler } from "../context/HandlerContext";
import { useToken } from "../context/TokenContext";
import { useParams } from "react-router-dom";
import useTraining from "../hooks/useTraining";
import EditTrainig from "../components/editTraining/EditTraining";

const EditTrainigContainer = ()=>{

    const {id} = useParams();

    const {training, loading, error} = useTraining(id);

    const [admin] = useAdmin();
    const [token, setToken] = useToken();
    const [handler, setHandler] = useHandler();


    setHandler(true);

    return(
        <main>
         <p>training{id}</p>
         <EditTrainig />
        </main>
    )
}

export default EditTrainigContainer;