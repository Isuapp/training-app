import './header.css';

import { useUser} from "../../context/UserContext"
import { useModal } from '../../context/modalContext';


import NavIcon from '../navIcon/NavIcon';
import {useNavigate } from 'react-router-dom';

import searchIcon from '../../assets/brand/icons/search.svg'
import filtersIcon from '../../assets/brand/icons/filters.svg';
import addIcon from '../../assets/brand/icons/gym.svg';

import IconButton from '../iconButton/IconButton';
import homeIcon from '../../assets/brand/icons/home.svg';
import FilterTraining from '../filterTraining/FilterTraining';


const Header = () => {
  const [user,setUser] = useUser();
  const [,setModal] = useModal();
  
  const navigate = useNavigate();

  const logout = () => {
    if(user){
      setUser(null);
      localStorage.removeItem('user');
      navigate('/login')
    }
  }
  
  const search=()=>{
    console.log('Search');
  }

  
  if(user)return(
    <header className='main-header'>
      <nav>
        {user&& <NavIcon to='/login' icon={homeIcon}/> }
        {user&& <IconButton onClick={search} icon={searchIcon}/> }
        {user&&user.roleUser==='user'&& <IconButton onClick={()=>{setModal(<FilterTraining />)}} icon={filtersIcon}/>}
        {user&&user.roleUser==='admin'&& <NavIcon to='/add-training' icon={addIcon}/> }
      </nav>
    </header>
  )

}

export default Header;