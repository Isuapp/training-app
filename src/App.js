import './App.css';
import { Route, Routes} from 'react-router-dom';

import Header from './components/header/Header';
import Landing from './containers/Landing';
import Home from './containers/Home';
import Filters from './containers/Filters';
import EditTraining from './containers/EditTraining';
import AddTraining from './containers/AddTraining';
import Login from './containers/Login';
import Register from './containers/Register';
import TrainingDetails from './containers/TrainingDetails';

function App() {
  return (
    <div className="app">
      <Header/>
      <h1>Trainig app</h1>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/training-details' element={<TrainingDetails />}/>
        <Route path='/add-training' element={<AddTraining />}/>
        <Route path='/edit-training' element={<EditTraining />}/>
        <Route path='/filters' element={<Filters />}/>
      </Routes>
    </div>
  );
}

export default App;
