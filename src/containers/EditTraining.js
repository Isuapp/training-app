import { useState } from "react"

const EditTrainig = ()=>{

    const [idTraining, setIdTraining] = useState();

    const handleEditTraining = async(e)=>{
        
        e.preventDefault()

        const res = await fetch(`http://localhost:4000/trainings/${idTraining}`,{

        })

    }
    return(
        <main>
            <h2>EditTrainig</h2>
        </main>
    )
}

export default EditTrainig;