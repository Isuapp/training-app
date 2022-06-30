import './listTrainings.css';

import { useEffect, useState } from "react";
import {  useToken } from "../../context/TokenContext";
import IconButton from '../iconButton/IconButton';

import trash from '../../assets/brand/icons/trash.svg';
import edit from '../../assets/brand/icons/pencil.svg';
import heart from '../../assets/brand/icons/heart.svg';
import { useHandler } from '../../context/HandlerContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/adminContext';


const ListTrainigs = ( ) => {

  const [token] = useToken();
  const [admin, setAdminInLocalStorage] = useAdmin();
  const [handler, setHandler] = useHandler();
  const navigate = useNavigate()

  const [ trainings, setTrainings] = useState([]);
  const [ training, setTraining] = useState([]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTraining, setShowTraining] = useState(false);
  
  const getTrainings = async () =>{

    const authorization = token ? token : admin
    try {
      
      const res = await fetch('http://localhost:4000/trainings',{
        headers:{
          Authorization: authorization,
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
      console.log(body.data);
      if(res==='error') setError(body.message)
      else {
        setHandler(true)
        setShowTraining(true);
        setTraining(body.data)
        console.log('training',training);
      }
    } catch (error) {
    }
  }

  const handleEditTraining = (idTraining)=>{
    navigate('/edit-training')
    console.log(idTraining);
    return idTraining
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
          <IconButton icon={trash} onClick={()=>{console.log('vavava')}}/>
          <IconButton icon={edit} onClick={()=>{handleEditTraining(training.id)}}/>
        </div>
      </li>
  ))

/*   const trainingDetail = training.map((tr)=>{
      <article key={tr.id}>
        <p>{tr.name}</p>
        <p>{tr.description}</p>
        <button onClick={()=>{setShowTraining(false)}}>salir</button>
      </article>
  }) */
  
  

  return (
      <div className='training-wraper'>
        {loading &&
          <p>Cargando entrenamientos</p>
        }
        {showTraining=== false ?
          <ul>
            {showTrainings}
          </ul>
        :
        /* {trainingDetail} */
        <article className='training-detail'>
          <div>
            <p>Name:</p>
            <p>{training.name}</p>
          </div>
          <div>
            <p>Typology</p>
            <p>{training.typology}</p>
          </div>
          <div>
            <p>Muscle Group</p>
            <p>{training.muscleGroup}</p>
          </div>
          <div>
            <p>Description</p>
            <p>{training.description}</p>
          </div>
          <IconButton
            icon={heart}
          />
        </article>
       /*  <>
          <p>training</p>
          <button onClick={()=>{setShowTraining(false)}}>salir</button>
        </> */
        }
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        </div>
    )

}

export default ListTrainigs;