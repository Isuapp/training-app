import { useState } from "react";
import { useToken } from "../context/TokenContext";

import Input from "../components/input/Input";
import FileInput from "../components/FIleInput/FIleInput";

const AddTrainig = ()=>{


    const typologies = [
            {
                id:0,
                name:'strength',
            },
            {
                id:1,
                name:'flexibility',
            },
            {
                id:2,
                name:'cardio',
            },
            {
                id:3,
                name:'resistance',
            },
            {
                id:4,
                name:'equilibrium'
            },
            {
                id:5,
                name:'recovery',
            },
        ]
    const muscles = [
            {
                id:0,
                name:'back',
            },
            {
                id:1,
                name:'chest',
            },
            {
                id:2,
                name:'arms',
            },
            {
                id:3,
                name:'shoulders',
            },
            {
                id:4,
                name:'legs'
            },
            {
                id:5,
                name:'full body',
            },
            {
                id:6,
                name:'cardio'
            }
        ]

    const [token] = useToken();

    const [name, setName ] = useState('');
    const [typology, setTypology] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);


    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    
    console.log(typology);

    const handleAddTraining = async (e)=>{
        e.preventDefault();
        setLoading(true);

        try {

            const formData = new FormData();
            console.log(`NAME:${name}, description:${description}, typology:${typology}, muscleGroup:${muscleGroup}, image:${image}, `);

            formData.append('name', name);
            formData.append('description', description);
            formData.append('typology', typology);
            formData.append('muscleGroup', muscleGroup);
            formData.append('image', image);
            
            const res = await fetch('http://localhost:4000/trainings',{
                method:'POST',
                headers:{
                    Authorization:  token,
                },
                body: formData,
            });

            const body = res.json();

            if(body.status='error') setError(body.message)
            else setSuccess(body.message);
        } catch (error) {
            
        }finally{
            setLoading(false)
        }

    }

    return(
        <main>
            <h2>AddTrainig</h2>
            <form onSubmit={handleAddTraining}>
                <Input
                    label='name'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input
                    label='description'
                    type='text'
                    name='description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <select name='typologies' onChange={(e)=>setTypology(e.target.value)}>
                    {
                        typologies.map(type=>(
                            <option key={type.id} value={type.name} >{type.name}</option>
                        ))
                    }
                </select>

                <select name='MuscleGroup' onChange={(e)=>setMuscleGroup(e.target.value)}>
                    {
                        muscles.map(muscle=>(
                            <option key={muscle.id} value={muscle.name} >{muscle.name}</option>
                        ))
                    }
                </select>
                <FileInput
                    className='fileInput-wraper'
                    onChange={(e)=>{ setImage(e.target.files[0])}}
                >
                    {image ? 
                    <figure>
                        <p>Preview</p>
                        <img src={URL.createObjectURL(image)} alt='image preview'/>
                    </figure>
                    : null
                    }
                </FileInput>
                <button disabled={loading}>
                    {loading && 'LOADING'}
                    {!loading && 'ADD TRAINING'}
                </button>
            </form>
            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>{success}</p>}
        </main>
    )
}

export default AddTrainig;