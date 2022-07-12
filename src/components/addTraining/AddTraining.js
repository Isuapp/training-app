import { addTrainingService } from "../../services";
import { muscles, typologies } from "../../utils/variables";
import { useState } from "react";

import Input from "../input/Input";
import FileInput from '../fileInput/FileInput';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { useUser } from '../../context/UserContext';

const AddTraining = ()=>{

    let navigate = useNavigate()
    const [user] = useUser();

    const [name, setName ] = useState('');
    const [typology, setTypology] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImage] = useState(null);
 

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const [active, setActive] = useState(false);

    const handleAddTraining = async(e)=>{
        e.preventDefault();
        
        try {

            const idUser =  user.idUser;
            const tokenUser = user.token;
            console.log(`token user: ${tokenUser} and userId:${idUser}`)
            const data= new FormData();

            data.append('idUser', idUser);
            data.append('name', name);
            data.append('description', description);
            data.append('typology', typology);
            data.append('muscleGroup', muscleGroup);
            data.append('image', images);
            await  addTrainingService({data, tokenUser});
            navigate('/trainings')

            setSuccess(true)
        } catch (error) {
            console.error(error)
        }
    }


    return(
        <section className='form-wraper'>
        <h2>AddTrainig</h2>
        <form onSubmit={handleAddTraining}>
            <Input
                label='name'
                type='text'
                name='name'
                value={name}
                onChange={(e)=>{setName(e.target.value);
                                    if (e.target.value !== '') setActive(true)
                                    else setActive(false)}}
                active={active}
            />
            <Input
                label='description'
                type='text'
                name='description'
                value={description}
                onChange={(e)=>{setDescription(e.target.value);
                                    if (e.target.value !== '') setActive(true)
                                    else setActive(false)}}
                active={active}
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
            <Button 
                disabled={loading}
                name={loading? 'loading..': 'add training'}
            />
        </form>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
    </section>
    )
}

export default AddTraining;