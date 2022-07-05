import jwt from 'jwt-decode';

import { addTrainingService } from "../../services";
import { muscles, typologies } from "../../utils/variables";
import { useState } from "react";

import Input from "../input/Input";
import FileInput from '../fileInput/FileInput';
import { useAdmin } from '../../context/adminContext';
import { useNavigate } from 'react-router-dom';
const AddTraining = ()=>{

    let navigate = useNavigate()
    const [admin] = useAdmin();

    const [name, setName ] = useState('');
    const [typology, setTypology] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImage] = useState(null);
 

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAddTraining = async(e)=>{
        e.preventDefault();
        
        try {

            const user = jwt(admin);
            const idUser =  user.idUser;
            const data= new FormData();

            data.append('idUser', idUser);
            data.append('name', name);
            data.append('description', description);
            data.append('typology', typology);
            data.append('muscleGroup', muscleGroup);
            data.append('image', images);
            console.log(admin);
            const training = await  addTrainingService({data, admin});
            navigate('/trainings')

            setSuccess(true)
        } catch (error) {
            console.error(error)
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
                {images ? 
                <figure>
                    <p>Preview</p>
                    <img src={URL.createObjectURL(images)} alt='image preview'/>
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

export default AddTraining;