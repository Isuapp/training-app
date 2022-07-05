
import TrainingMiniCard from '../trainingsMiniCard/TraininingMiniCard';
import './listTrainings.css';

const ListTrainings = ( { trainings, handleTrash }) => {

    return trainings.length ? (
      <ul>
          {trainings.map((training)=>(
            <li key={training.id} data-id={training.id}>
                  <TrainingMiniCard 
                    training={training}
                    handleTrash={handleTrash}
                  />
            </li>
          ))}
      </ul>
    ):(
     <ul>No trainings yet...</ul>
    );

};

export default ListTrainings;