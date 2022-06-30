import './listTrainings.css';

import { useEffect, useState } from "react";
import {  useToken } from "../../context/TokenContext";
import IconButton from '../iconButton/IconButton';

import trash from '../../assets/brand/icons/trash.svg';
import edit from '../../assets/brand/icons/pencil.svg';
import image from '../../assets/brand/icons/trash.svg'


const ListTrainigs = ( ) => {

  const [token] = useToken();
  const [ trainings, setTrainings] = useState([]);
  const [ training, setTraining] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTraining, setShowTraining] = useState(false);
  
  const getTrainings = async () =>{

    try {
      
      const res = await fetch('http://localhost:4000/trainings',{
        headers:{
          Authorization: token,
        }
      });
      
      const body = await res.json();
      console.log(body.data.trainings);
      if(body.status==='error') setError(body.message);
      else {
        setLoading(false);
        setTrainings(body.data.trainings)
      }

    } catch (error) {
      console.error(error)
      setError(error.message)

    }finally{
      setLoading(false)
    }
  }

  const showDetailTraining = async (idTraining)=>{

    try {
      
      const res = await fetch(`http://localhost:4000/trainings/${idTraining}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          Authorization: token,
        }
      });

      const body = await res.json()
      console.log(body.data.training);
      const tr = body.data.training
      if(res==='error') setError(body.message)
      else {
        setShowTraining(true);
        console.log(showTraining);
        setTraining([tr])
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{getTrainings()},[])

  const showTrainings =   trainings.map(training=>(
      <li key={training.id} className='training' onClick={()=>showDetailTraining(training.id)}>
        <div>  
          <figure> 
            <img src={`http://localhost:4000/${training.image}`}/*  alt={`image of training ${training.name}`} */ />
          </figure>
        <h4>{training.name}</h4></div>
        <div>
          <IconButton icon={trash}/>
          <IconButton icon={edit}/>
        </div>
      </li>
  ))

/*   const trainingDetail = training.map(TR=>{
      <article>
        <p>{training.name}</p>
        <p>{training.description}</p>
        <button onClick={()=>{setShowTraining(false)}}>salir</button>
      </article>
  }) */
  
  

  return (
      <>
        {loading &&
          <p>Cargando entrenamientos</p>
        }
        {showTraining=== false ?
          <ul>
            {showTrainings}
          </ul>
        :
         <>
         <p>training:{training.name}</p>
         <button onClick={()=>setShowTraining(false)} >salir</button> 
          </>
        }
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        </>
    )

}

export default ListTrainigs;