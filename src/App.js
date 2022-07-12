import './App.css';
import { Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import LandingContainer from './containers/LandingContainer';
import EditTrainingContainer from './containers/EditTrainingContainer';
import AddTrainigContainer from './containers/AddTrainingContainer';
import LoginContainer from './components/login/LoginContainer';
import RegisterContainer from './components/register/RegisterContainer';
import TrainingDetailsContainer from './containers/TrainingDetailsContainer';
import TrainingsContainer from './containers/TrainingsContainer';
import NotFoundContainer from './containers/NotFoundContainer';

import FilterTraining from './components/filterTraining/FilterTraining';
import HeaderUp from './components/headerUp/HeaderUp';
import Footer from './components/footer/Fotter';

function App() {

  return (
    <div className="app">
      <HeaderUp />
     <Header/>
     <main className='main-app'>
      <Routes>
        <Route path='/' element={<LandingContainer />}/>
        <Route path='/trainings' element={<TrainingsContainer />}/>
        <Route path='/trainings/:id' element={<TrainingDetailsContainer />}/>
        <Route path='/register' element={<RegisterContainer />}/>
        <Route path='/login' element={<LoginContainer />}/>
        <Route path='/add-training' element={<AddTrainigContainer />}/>
        <Route path='/edit-training/:id' element={<EditTrainingContainer />}/>
        <Route path='/filter' element={<FilterTraining />}/>
        <Route path='*' element={<NotFoundContainer />}/>
      </Routes>
      <Footer/>
     </main>
    </div>
  );
}

export default App;
