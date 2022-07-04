import './header.css';

import { useToken} from "../../context/TokenContext"
import { useHandler } from '../../context/HandlerContext';
import { useModal } from '../../context/modalContext';
import { useAdmin } from '../../context/adminContext';


import NavIcon from '../navIcon/NavIcon';
import {useNavigate } from 'react-router-dom';

import add from '../../assets/brand/icons/gym.svg'
import IconButton from '../iconButton/IconButton';
import signout from '../../assets/brand/icons/sign-out-alt.svg';
import search from '../../assets/brand/icons/search.svg'
import arrow from '../../assets/brand/icons/angle-left.svg'
import edit from '../../assets/brand/icons/pencil.svg'
import trash from '../../assets/brand/icons/trash.svg'
import FilterTraining from '../filterTraining/FilterTraining';


const Header = () => {
  const [token,setToken] = useToken();
  const [handler, setHandler] = useHandler();
  const [admin, setAdmin] = useAdmin();
  const [,setModal] = useModal();
  
  const navigate = useNavigate();

  const logout = () => {
    if(token){
      setToken(null);
      localStorage.removeItem('token');
      navigate('/')
    }else{
      setAdmin(null);
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
        {handler && <IconButton  onClick={back} icon={arrow}/>}
        {handler && <IconButton  onClick={back} icon={trash}/>}
        {handler && <IconButton  onClick={back} icon={edit}/>}
        {admin&&!handler && <IconButton onClick={logout} icon={signout}/> }
        {admin&&!handler && <IconButton onClick={()=>{setModal(<FilterTraining />)}} icon={search}/> }
        {admin&&!handler && <NavIcon to='/add-training' icon={add} />}
        {token&&!handler && <IconButton onClick={logout} icon={signout}/> }
        {token&&!handler && <IconButton onClick={()=>{setModal(<FilterTraining />)}} icon={search}/> }
        {token&&!handler && <NavIcon to='/add-training' icon={add} />}
      </nav>
    </header>
  )

}

export default Header;