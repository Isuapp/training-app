import './trainingMiniCard.css';

import { url } from "../../utils/variables"

import trash from '../../assets/brand/icons/trash.svg'
import heart from '../../assets/brand/icons/heart.svg'
import edit from '../../assets/brand/icons/pencil.svg'

import IconButton from '../iconButton/IconButton'
import NavIcon from '../navIcon/NavIcon';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { likesService } from '../../services';


const TrainingMiniCard = ({ training, handleTrash })=>{

    const [user] = useUser();
    const role = user.roleUser;
    

    const handleLikes =async (idTraining)=>{
        try {
            const tokenUser = user.token;
          
            await likesService(idTraining, tokenUser)
          
        } catch (error) {
          console.error(error)
        }
      }

    if(role==='user') return(
        <article className='training-user'>
            <Link to={`/trainings/${training.id}`} className='link'>  
                <figure> 
                    <img src={training.image? `${url}${training.image}`: '../../assets/utils/broken-image.png'} alt={`image of training ${training.name}`} />
                </figure>
            </Link>
            <div>
                <h4>Name</h4>
                <h4>{training.name}</h4>
                <h4>Muscle Group</h4>
                <h4>{training.muscleGroup}</h4>
            </div>
            <div>
                <p>{training.likes}</p>
                <IconButton icon={heart} onClick={()=>{handleLikes(training.id)}} />   
            </div>
        </article>
    )

   if(role==='admin' || 'trainer') return(
            <article className='training-admin'>
            <Link to={`/trainings/${training.id}`} className='link'>  
                <figure> 
                    <img src={training.image? `${url}${training.image}`: '../../assets/utils/broken-image.png'} alt={`image of training ${training.name}`} />
                </figure>
            <h4>{training.name}</h4>
            </Link>
            <div>
                <IconButton icon={trash} onClick={handleTrash} />
                <NavIcon 
                    to={`/edit-training/${training.id}`}
                    icon={edit}
                />
            </div>
        </article>
    )
}

export default TrainingMiniCard;