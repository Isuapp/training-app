import './header.css';

import { useToken} from "../../context/TokenContext"
import { useHandler } from '../../context/HandlerContext';


import NavIcon from '../navIcon/NavIcon';
import {useNavigate } from 'react-router-dom';

import add from '../../assets/brand/icons/gym.svg'
import IconButton from '../iconButton/IconButton';
import signout from '../../assets/brand/icons/sign-out-alt.svg';
import search from '../../assets/brand/icons/search.svg'
import arrow from '../../assets/brand/icons/angle-left.svg'
import edit from '../../assets/brand/icons/pencil.svg'
import trash from '../../assets/brand/icons/trash.svg'
import { useAdmin } from '../../context/adminContext';

const Header = () => {
  const [token,setTokenInLocalStorage] = useToken();
  const [handler, setHandler] = useHandler();
  const [admin, setAdminInLocalStorage] = useAdmin();
  
  const navigate = useNavigate();

  const logout = () => {
    if(token){
      setTokenInLocalStorage(null);
      localStorage.removeItem('token');
      navigate('/')
    }else{
      setAdminInLocalStorage(null);
      localStorage.removeItem('admin');
      navigate('/')
    }
  }

  const back =()=>{
    navigate('/');
    setHandler(false)
  }

  return(
    <header>
      <nav>
        {handler &&
        <>
          <IconButton  onClick={back} icon={arrow}/>
          <IconButton  onClick={back} icon={trash}/>
          <IconButton  onClick={back} icon={edit}/>
        </>
        }
        <IconButton onClick={logout} icon={signout}/> 
        <IconButton /* onClick='#' */ icon={search}/> 
        <NavIcon to='/add-training' icon={add} />
      </nav>
    </header>
  )

}

export default Header;