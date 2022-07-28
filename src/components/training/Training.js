import './training.css';

import iconHeart   from '../../assets/brand/icons/heart.svg'
import { url } from '../../utils/variables';
import { likesService } from '../../services';
import { useUser } from '../../context/UserContext';
import IconButton from '../iconButton/IconButton';


const Training = ({training, likes, setTraining})=>{
    const [user] = useUser();
    const handleLikes = async (idTraining)=>{
        try {
            console.log(training);
            const tokenUser = user.token;
            const message = await likesService(idTraining, tokenUser)

            if(message.includes('eliminado')) {
                setTraining({
                    ...training,
                    likes: training.likes - 1
                });
            }else {
                setTraining({
                    ...training,
                    likes: Number(training.likes) + 1
                });
            }
        } catch (error) {
          console.error(error)
        }
      }

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
        <div >
            <IconButton name={training.likes} onClick={() => {handleLikes(training.id)}} icon={iconHeart}/>
        </div>
    </article>
    )
}

export default Training;