import './App.css';
import { Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import LandingContainer from './containers/LandingContainer';
import HomeContainer from './containers/HomeContainer';
import FiltersContainer from './containers/FiltersContainer';
import EditTrainingContainer from './containers/EditTrainingContainer';
import AddTrainigContainer from './containers/AddTrainingContainer';
import LoginContainer from './components/login/LoginContainer';
import RegisterContainer from './components/register/RegisterContainer';
import TrainingDetailsContainer from './containers/TrainingDetailsContainer';
import Modal from './components/modal/Modal';
import TrainingsContainer from './containers/TrainingsContainer';
import NotFoundContainer from './containers/NotFoundContainer';

import { useModal } from './context/modalContext';
import { useToken } from './context/TokenContext';
import { useAdmin } from './context/adminContext';

function App() {

  const [token]=useToken();
  const [admin]=useAdmin();
  const [modal]=useModal();
  return (
    <div className="app">
     <Header/>
      <Routes>
        <Route path='/' element={<LandingContainer />}/>
        {/* <Route path='/home' element={<Home />}/> */}
        <Route path='/trainings' element={<TrainingsContainer />}/>
        <Route path='/trainings/:id' element={<TrainingDetailsContainer />}/>
        <Route path='/register' element={<RegisterContainer />}/>
        <Route path='/login' element={<LoginContainer />}/>
        <Route path='/add-training' element={<AddTrainigContainer />}/>
        <Route path='/edit-training/:id' element={<EditTrainingContainer />}/>
        <Route path='/trainings?:by=:key' element={<FiltersContainer />}/>
        <Route path='*' element={<NotFoundContainer />}/>
      </Routes>
      {modal && <Modal>{modal}</Modal>}
    </div>
  );
}

export default App;
