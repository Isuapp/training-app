import { useAdmin } from '../../context/adminContext';
import { deleteTrainingServices } from '../../services';
import TrainingMiniCard from '../trainingsMiniCard/TraininingMiniCard';
import './listTrainings.css';

const ListTrainings = ( { trainings }) => {

    const [admin] = useAdmin();

    const handleDeleteTraining = async (idTraining)=>{

      try {
        await deleteTrainingServices(idTraining, admin)
      } catch (error) {
        console.error(error)
      }
    }

    return trainings.length ? (
      <ul>
          {trainings.map((training)=>(
            <li key={training.id}>
                  <TrainingMiniCard 
                    training={training}
                    trash={()=>{handleDeleteTraining(training.id)}}
                  />
            </li>
          ))}
      </ul>
    ):(
     <ul>No trainings yet...</ul>
    );

};

export default ListTrainings;