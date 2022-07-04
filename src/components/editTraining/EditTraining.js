import './editTraining.css';

import Input from '../input/Input';
import FileInput from '../fileInput/FileInput.js'; 
import { useState } from 'react';
import { typologies, muscles } from '../../utils/variables';
import { useAdmin } from '../../context/adminContext';
import { editTrainingService } from '../../services';
import { useParams } from 'react-router-dom';


const EditTrainig = ()=>{
const {id} = useParams()


    const [admin] = useAdmin();    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [typology, setTypology] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [images, setImages] = useState('');

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEdit = async (e)=>{
        e.preventDefault()
        try {
            setLoading(true);

            const data = new FormData();
            data.append('name', name);
            data.append('description', description);
            data.append('typology', typology);
            data.append('muscleGroup', muscleGroup);
            data.append('image', images);
            
            const training = await editTrainingService({id, admin, data})
            console.log(training)
            setSuccess(true);

        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <main>
        <h2>Edit Training</h2>
        <form onSubmit={handleEdit}>
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
                onChange={(e)=>{ setImages(e.target.files[0])}}
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
                {!loading && 'UPDATE TRAINING'}
            </button>
        </form>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
    </main>
    )
}

export default EditTrainig;