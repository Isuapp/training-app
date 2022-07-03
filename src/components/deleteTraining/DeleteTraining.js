/* import { url } from "../../utils/variables"; 
 
 export const handleDeleteTraining = async (idTraining)=>{

    const [admin] = useAdmin();
    const [error, setError] = useState(null);

    try {
      console.log(admin);
      const res = await fetch(`${url}${idTraining}`,{
        method:'DELETE',
        headers:{
          'content-type':'application/json',
          Authorization: admin,
        }
      })
      const body = await res.json();
      if(body.status==='error'){
        setError(body.message);
      }else{
        setSuccess(body.message)
      }


    } catch (error) {
      
    }
  } */