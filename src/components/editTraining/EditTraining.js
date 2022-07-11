
import Input from '../input/Input';
import FileInput from '../fileInput/FileInput.js'; 
import { useState } from 'react';
import { typologies, muscles } from '../../utils/variables';
import { editTrainingService } from '../../services';
import { useNavigate, useParams } from 'react-router-dom';
import useTraining from '../../hooks/useTraining';
import { url } from '../../utils/variables';
import Button from '../button/Button';
import { useUser } from '../../context/UserContext';


const EditTrainig = ()=>{
    const {id} = useParams()

    const navigate = useNavigate()

    const {training} = useTraining(id);
    const [user, setUser] = useUser();
    
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

            const tokenUser = user.token;
            const data = new FormData();
            data.append('name', name);
            data.append('description', description);
            data.append('typology', typology);
            data.append('muscleGroup', muscleGroup);
            data.append('image', images);
            
            await editTrainingService({id, tokenUser, data})
            navigate('/trainings');
            setSuccess(true);

        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }

    
    return(
        <section className='form-wraper'>
        <h2>Edit Training</h2>
        <form onSubmit={handleEdit}>
            <Input
                label={training.name}
                type='text'
                name='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <Input
                label={training.description}
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
                onChange={(e)=>{ setImages(e.target.files[0])}}
            >
                {images ? 
                <figure>
                    <p>New image</p>
                    <img src={URL.createObjectURL(images)} alt='image-preview'/>
                </figure>
                : 
                <figure>
                    <p>CURRENT IMAGE</p>
                    <img src={`${url}${training.image}`} alt='current-image'/>
                </figure>
                }
            </FileInput>
            <Button 
                disabled={loading}
                name={loading? 'loading..': 'update training'}
            />
        </form>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
    </section>
    )
}

export default EditTrainig;