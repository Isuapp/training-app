import './header.css';

import { useUser} from "../../context/UserContext"
import { useHandler } from '../../context/HandlerContext';
import { useModal } from '../../context/modalContext';
import { useAdmin } from '../../context/adminContext';


import NavIcon from '../navIcon/NavIcon';
import {useNavigate } from 'react-router-dom';

import add from '../../assets/brand/icons/gym.svg'
import IconButton from '../iconButton/IconButton';
import signout from '../../assets/brand/icons/sign-out-alt.svg';
import search from '../../assets/brand/icons/search.svg'
import FilterTraining from '../filterTraining/FilterTraining';


const Header = () => {
  const [user,setUser] = useUser();
  const [handler, setHandler] = useHandler();
  const [admin, setAdmin] = useAdmin();
  const [,setModal] = useModal();
  
  const navigate = useNavigate();

  const logout = () => {
    if(user){
      setUser(null);
      localStorage.removeItem('user');
      navigate('/login')
    }
  }

  const back =()=>{
    navigate('/');
    setHandler(false)
  }

  return(
    <header>
      <nav>
        {user&& <IconButton onClick={logout} icon={signout}/> }
        {user&& <IconButton onClick={()=>{setModal(<FilterTraining />)}} icon={search}/> }
        {user&& <NavIcon to='/add-training' icon={add} />}
      </nav>
    </header>
  )

}

export default Header;