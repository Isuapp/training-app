import './trainingMiniCard.css';

import { url } from "../../utils/variables"

import trash from '../../assets/brand/icons/trash.svg'
import edit from '../../assets/brand/icons/pencil.svg'

import IconButton from '../iconButton/IconButton'
import { Link } from 'react-router-dom';

const TrainingMiniCard = ({ training, handleTrash })=>{
    return(
        <article className='training'>
            <Link to={`/trainings/${training.id}`} className='link'>  
                <figure> 
                    <img src={training.image? `${url}${training.image}`: '../../assets/utils/broken-image.png'} alt={`image of training ${training.name}`} />
                </figure>
                <h4>{training.name}</h4>
            </Link>
            <p>{training.likes}</p>
            <div>
                <IconButton icon={trash} onClick={handleTrash} />
                <Link to={`/edit-training/${training.id}`}>edit</Link>
            </div>
        </article>
    )
}

export default TrainingMiniCard;