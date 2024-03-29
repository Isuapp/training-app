import './headerUp.css'

import arrowIcon from '../../assets/brand/icons/arrow.svg';
import userIcon from '../../assets/brand/icons/user.svg';

import IconButton from '../../components/iconButton/IconButton';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const HeaderUp = ()=>{
    const [user, setUser] = useUser();

    const navigate = useNavigate();
    const logout = () => {
        if(user){
          setUser(null);
          localStorage.removeItem('user');
          navigate('/login')
        }
      }

      const back =()=>{
        navigate(-1);
      }

    return(
          <nav className='header-up'>
            {user&&<IconButton  onClick={back} icon={arrowIcon} className='icon-header-up'/>}
            {user&&<IconButton onClick={logout} name={`Close sesion of ${user.name}!`}icon={userIcon} className='icon-header-up'/>}
          </nav>

    )
}

export default HeaderUp;