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
  const [admin] = useAdmin();

  const navigate = useNavigate();

  const logout = () => {
    setTokenInLocalStorage(null);
    localStorage.removeItem('token');
    navigate('/')
  }

  const back =()=>{
    navigate('/');
    setHandler(false)
  }

  return(
    <header>
      <nav>
        {handler && <IconButton  onClick={back} icon={arrow}/>}
        {handler && <IconButton  onClick={back} icon={trash}/>}
        {handler && <IconButton  onClick={back} icon={edit}/>}
        {token&&admin&&!handler && <IconButton onClick={logout} icon={signout}/> }
        {token&&admin&&!handler && <IconButton onClick='#' icon={search}/> }
        {token&&admin&&!handler && <NavIcon to='/add-training' icon={add} />}
      </nav>
    </header>
  )

}

export default Header;