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

import brokenImage from '../../assets/utils/broken-image.png'
const ListTrainigs = ( ) => {

  const [token] = useToken();
  const [admin, setAdminInLocalStorage] = useAdmin();
  const [handler, setHandler] = useHandler();
  const navigate = useNavigate()

  const authorization = token? token : admin;
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
          Authorization: authorization,
        }
      });

      const body = await res.json()

      if(body.status==='error') setError(body.message)
      else {
        setHandler(true)
        setShowTraining(true);
        setTraining(body.data)
      }
    } catch (error) {
    }
  }

  const handleEditTraining = async (idTraining)=>{
    localStorage.setItem('idTraining',idTraining)
    navigate('/edit-training')
  }

  useEffect(()=>{getTrainings()},[success])

console.log(training);
  const showTrainings =   trainings.map(training=>(
      <li key={training.id} className='training' onClick={()=>showDetailTraining(training.id)}>
        <div>
          <figure>

          <img src={`http://localhost:4000/${training.image}`} alt={`image of training ${training.name}`} />

            {/* <img src={brokenImage}  alt='image-preview'/> */}

          </figure>
        <h4>{training.name}</h4></div>
        <div>
          <IconButton icon={trash} onClick={()=>{handleDeleteTraining(training.id)}}/>
          <IconButton icon={edit} onClick={()=>{handleEditTraining(training.id)}}/>
        </div>
      </li>

  ))
    console.log(showTrainings);
  const handleDeleteTraining = async (idTraining)=>{

    try {
      console.log(admin);
      const res = await fetch(`http://localhost:4000/trainings/${idTraining}`,{
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
  }

/*   const trainingDetail = training.map((tr)=>{
      <article key={tr.id}>
        <p>{tr.name}</p>
        <p>{tr.description}</p>
        <button onClick={()=>{setShowTraining(false)}}>salir</button>
      </article>
  }) */

  const handleLikes =async (like)=>{

    try {

      const res = await fetch(`http://localhost:4000/trainings/${like}/likes`,{
        method:'POST',
        headers:{
          Authorization: authorization,
          'content-type': 'application/json',
        },
      });

      const body = await res.json();
      console.log(body);
      if(body.status==='error'){
        setError(body.message);
      }else if(body.status==='ok'){
        setError(body.message);
      }else{
        setSuccess(body.message)
      }
    } catch (error) {
      console.error(error)
    }
  }


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
            onClick={()=>{handleLikes(training.id)}}
          />
          {error&&<p className='error' >{error}</p>}
          {success&&<p className='success' >{success}</p>}
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