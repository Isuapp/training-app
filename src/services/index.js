import { url } from "../utils/variables"

export const getAllTrainingsService = async (auth)=>{

  const res = await fetch(`${url}trainings`,{
        headers:{
          Authorization: auth,
        }
      });

    const body = await res.json();

    if(!res.ok) throw new Error(body.message);

    return body.data.trainings;
}

export const getSingleTrainingsService = async (idTraining,auth)=>{
  
  
  const res = await fetch(`${url}trainings/${idTraining}`,{
        headers:{
          Authorization: auth,
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

export const deleteTrainingServices = async (idTraining,admin)=>{

    const res = await fetch(`${url}trainings/${idTraining}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        Authorization: admin,
      }
    })
    const body = await res.json();
    if(!res.ok) throw new Error(body.message);
    console.log('Borrado con éxito');
  }


  export const addTrainingService = async ({admin, data})=>{

    const res = await fetch(`${url}trainings/`,{
      method:'POST',
      headers:{
        Authorization:admin,
      },
      body:data,
    });

    const body = await res.json();
    console.log(body);
    if(!res.ok) throw new Error(body.message);

    return body.data
  }

export const editTrainingService = async ({id, admin, data})=>{

  const res = await fetch(`${url}trainings/${id}`,{
    method:'PUT',
    headers:{
      Authorization: admin,
    },
    body:data,
  });

  const body = await  res.json();
  console.log(body);
  if(!res.ok) throw new Error(body.message);

  return body.data
}

export const filterTrainingsService = async (by, key, auth)=>{
  
  
  const res = await fetch(`${url}trainings?${by}=${key}`,{
        headers:{
          Authorization: auth,
        }
      });

   
    const body = await res.json();
    console.log('body filtered', body)
    if(!res.ok) throw new Error(body.message);

    return body.data;
}