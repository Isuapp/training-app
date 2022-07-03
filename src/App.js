import './App.css';
import { Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Landing from './containers/Landing';
import Home from './containers/Home';
import Filters from './containers/Filters';
import EditTraining from './containers/EditTraining';
import AddTraining from './containers/AddTraining';
import Login from './components/login/Login';
import Register from './components/register/Register';
import TrainingDetails from './containers/TrainingDetails';
import { useToken } from './context/TokenContext';
import { useAdmin } from './context/adminContext';
import Trainings from './containers/Trainings';
import NotFound from './containers/NotFound';

function App() {

  const [token]=useToken();
  const [admin]=useAdmin();
  return (
    <div className="app">
     <Header/>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/trainings' element={<Trainings />}/>
        <Route path='/trainings/:id' element={<TrainingDetails />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/training-details' element={<TrainingDetails />}/>
        <Route path='/add-training' element={<AddTraining />}/>
        <Route path='/edit-training' element={<EditTraining />}/>
        <Route path='/filters' element={<Filters />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
