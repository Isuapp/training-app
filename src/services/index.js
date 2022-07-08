import { url } from "../utils/variables"

export const getAllTrainingsService = async ( typology ,muscleGroup ,auth)=>{

  const res = await fetch(`${url}trainings?typology=${typology}&muscleGroup=${muscleGroup}`,{
        headers:{
          Authorization: auth,
        }
      });

    const body = await res.json();
    
    if(!res.ok) throw new Error(body.message);

    return body.data.trainings;
}

export const getSingleTrainingsService = async (idTraining,tokenUser)=>{
  
  
  const res = await fetch(`${url}trainings/${idTraining}`,{
        headers:{
          Authorization: tokenUser,
        }
      });

   
    const body = await res.json();

    if(!res.ok) throw new Error(body.message);

    return body.data;
}

export const registerService = async (formData)=>{
  const res = await fetch(`${url}register`,{
        method:'POST',
        body: formData,
  })

  const body = await res.json();

  if(!res.ok){
    throw new Error(body.message)
  }

}

export const loginService = async ({email, password})=>{
  
  const res = await fetch(`${url}login`,{
    method:'POST',
    headers:{
        'content-type':'application/json',
    },
    body: JSON.stringify({
        email,
        password,
    }),
  });

  const body = await res.json();

  if(!res.ok){
    throw new Error(body.message)
  }

  return body.data;
}

export const likesService = async (like, auth)=>{
console.log(like, auth);

  const res = await fetch(`${url}trainings/${like}/likes`,{
    method:'POST',
    headers:{
      Authorization: auth,
    },
  });

  const body = await res.json();
  console.log(body);

  if(!res.ok) throw new Error(body.message);
  
  return body.data
}

export const deleteTrainingServices = async (idTraining,tokenUser)=>{
    console.log('idtrainig delete', idTraining, 'url', )
    console.log(`${url}trainings/${idTraining}`)
    const res = await fetch(`${url}trainings/${idTraining}`,{
      method:'DELETE',
      headers:{
        Authorization: tokenUser,
      }
    })
    const body = await res.json();
    console.log('body delete', body);
    if(!res.ok) throw new Error(body.message);
    console.log('Borrado con éxito');
  }


  export const addTrainingService = async ({tokenUser, data})=>{

    const res = await fetch(`${url}trainings/`,{
      method:'POST',
      headers:{
        Authorization:tokenUser,
      },
      body:data,
    });

    const body = await res.json();
    console.log(body);
    if(!res.ok) throw new Error(body.message);

    return body.data
  }

export const editTrainingService = async ({id, tokenUser, data})=>{

  const res = await fetch(`${url}trainings/${id}`,{
    method:'PUT',
    headers:{
      Authorization: tokenUser,
    },
    body:data,
  });

  const body = await  res.json();
  console.log(body);
  if(!res.ok) throw new Error(body.message);

  return body.data
}
/* 
export const getAllTrainingsService = async ( typology ,muscleGroup ,auth)=>{

  const res = await fetch(`${url}trainings?typology=${typology}&muscleGroup=${muscleGroup}`,{
        headers:{
          Authorization: auth,
        }
      });

    const body = await res.json();
    
    if(!res.ok) throw new Error(body.message);

    return body.data.trainings;
} */