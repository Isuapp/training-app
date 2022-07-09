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
        <header className='header-up'>
          <nav>
            {user&&<IconButton  onClick={back} icon={arrowIcon} className='icon-header-up'/>}
            {user&&<IconButton onClick={logout}icon={userIcon} className='icon-header-up'/>}
          </nav>
        </header>
    )
}

export default HeaderUp;