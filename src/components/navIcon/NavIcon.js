import { Link } from 'react-router-dom';
import './navIcon.css';

const NavIcon = ({to, icon})=>{

    return(
        
        <Link to={to} className='navLink'>
            <figure>
                <img src={icon} />
            </figure>
        </Link>
    )
}

export default NavIcon;