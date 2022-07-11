import './header.css';

import { useUser} from "../../context/UserContext"
import { useModal } from '../../context/modalContext';
import {useNavigate } from 'react-router-dom';


import userIcon from '../../assets/brand/icons/user.svg';
import searchIcon from '../../assets/brand/icons/search.svg'
import filtersIcon from '../../assets/brand/icons/filters.svg';
import addIcon from '../../assets/brand/icons/gym.svg';

import NavIcon from '../navIcon/NavIcon';
import IconButton from '../iconButton/IconButton';
import logoIcon from '../../assets/brand/icons/logo.svg';
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

  const back =()=>{
    navigate(-1);
  }
  
  if(user)return(
    <header className='main-header'>
      <nav>
        {user&& <NavIcon name='HOME' to='/trainings' icon={logoIcon}/> }
        {user&& <IconButton name='SEARCH' onClick={search} icon={searchIcon}/> }
        {user&&user.roleUser==='user'&& <IconButton name='FILTER TRAININGS' onClick={()=>{setModal(<FilterTraining />)}} icon={filtersIcon}/>}
        {user&&user.roleUser==='admin'&& <NavIcon name='ADD TRAININGS'to='/add-training' icon={addIcon}/> }
        {user&&<IconButton  onClick={logout} icon={userIcon} />}
      </nav>
    </header>
  )

}

export default Header;