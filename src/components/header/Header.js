import './header.css';

import { useToken} from "../../context/TokenContext"


import NavIcon from '../navIcon/NavIcon';

import add from '../../assets/brand/icons/gym.svg'
import IconButton from '../iconButton/IconButton';
import signout from '../../assets/brand/icons/sign-out-alt.svg';
import search from '../../assets/brand/icons/search.svg'
import {useNavigate } from 'react-router-dom';

const Header = () => {
  const [token,setTokenInLocalStorage] = useToken();

  const navigate = useNavigate();

  const logout = () => {
    setTokenInLocalStorage(null);
    localStorage.removeItem('token');
    navigate('/')
  }

  return(
    <header>
      <nav>
        {token && <IconButton onClick={logout} icon={signout}/> }
        {token && <IconButton onClick='#' icon={search}/> }
        {token && <NavIcon to='/add-training' icon={add} />}
      </nav>
    </header>
  )

}

export default Header;