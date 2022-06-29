import { NavLink } from 'react-router-dom';
import './navIcon.css';

const NavIcon = ({to, icon})=>{

    return(
        
        <NavLink to={to} className='navLink'>
            <figure>
                <img src={icon} />
            </figure>
        </NavLink>
    )
}

export default NavIcon;