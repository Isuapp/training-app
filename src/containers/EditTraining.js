import { useEffect, useState } from "react"
import { useAdmin } from "../context/adminContext";

import Input from "../components/input/Input";
import { useHandler } from "../context/HandlerContext";
import { useToken } from "../context/TokenContext";

const EditTrainig = ()=>{


    const [admin] = useAdmin();
    const [token, setTokenInLocalStorage] = useToken();
    const [handler, setHandler] = useHandler();

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(true);


    const id = localStorage.getItem('idTraining')

   const handleEditTraining = async(e)=>{

        try {
            const res = await fetch(`http://localhost:4000/trainings/${id}`,{
                method:'PUT',
                headers:{
                    Authorization:admin
                },
            });
            const body = await res.json();
            console.log('Body:',body);
        } catch (error) {

        }
    }

    const getTraining = async ()=>{
        console.log('handler', handler)
        setHandler(true)
        try {
            const authorization = token? token : admin;
            const res = await fetch(`http://localhost:4000/trainings/3`,{
            method:'GET',
            headers:{
            'content-type':'application/json',
            Authorization: authorization,
            }
        });


            const body = await res.text();
            console.log(`Body:${body}`);
            if(body.status==='error'){
                setError(body.message)
            }else{
                setSuccess(body.message)
            }
        } catch (error) {
            console.log(error)
        }finally{

        }
    }

    useEffect(()=>{getTraining()},[])
    return(
        <main>
            <h2>EDIT</h2>
            <form onSubmit={handleEditTraining}>
                <Input />
            </form>
            <button onClick={getTraining}>get</button>
            {error&&<p className="error" >{error}</p>}
            {success&&<p className="success" >{success}</p>}
        </main>
    )
}

export default EditTrainig;