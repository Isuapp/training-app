import './training.css';

import heart from '../../assets/brand/icons/heart.svg';
import IconButton from '../iconButton/IconButton';
import { useState } from "react";


const Training = ({training, likes})=>{

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    
    return(
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
                <p className='success'>votes {training.likes}</p>
            </div>
            <IconButton
                icon={heart}
                onClick={likes}
            />
            {error&&<p className='error' >{error}</p>}
            {success&&<p className='success' >{success}</p>}
        </article>
    )
}

export default Training;