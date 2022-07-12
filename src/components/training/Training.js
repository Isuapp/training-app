import './training.css';

import iconHeart   from '../../assets/brand/icons/heart.svg'
import { url } from '../../utils/variables';

import IconButton from '../iconButton/IconButton';


const Training = ({training, likes})=>{

    
    return(
        <article  className='training-detail' >
            <figure> 
                <img src={training.image? `${url}${training.image}`: '../../assets/utils/broken-image.png'} alt={`image of training ${training.name}`} />
            </figure>
        <div>
            <h4>{training.name}</h4>
            <h4>Muscle Group</h4>
            <h4>{training.muscleGroup}</h4>
            <h4>Typology</h4>
            <h4>{training.typology}</h4>
            <h4>Description</h4>
            <p>{training.description}</p>
        </div>
        <div>
            <IconButton name={training.likes} icon={iconHeart}/>
        </div>
    </article>
    )
}

export default Training;