import { useEffect, useState } from "react";
import { TokenProvider, useToken } from "../../context/TokenContext";

const ListTrainigs = ( ) => {

  const [token] = useToken()
  const getTrainings = async () =>{
    try {
      const res = await fetch('https://localhost:4000/trainings',
        {
          method: 'GET',
          headers:{
            Authorization: token,
          }
        }
      );
      const body = await res.json();
      console.log( body)
    } catch (error) {
      console.error( error)
    }
  }

    getTrainings()

  return (
    <ul>
      <button onClick={getTrainings}>aha</button>
    </ul>
    )

}

export default ListTrainigs;