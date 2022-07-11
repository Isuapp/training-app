import { Link } from 'react-router-dom';
import './navIcon.css';

const NavIcon = ({to, icon, name})=>{

    return(
        
        <Link to={to} className='navLink'>
            <figure>
                <img src={icon} />
            </figure>
            <p>{name}</p>
        </Link>
    )
}

export default NavIcon;