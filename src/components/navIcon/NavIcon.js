import './navIcon.css';

import { Link } from 'react-router-dom';

const NavIcon = ({to, icon, name})=>{

    return(
        
        <Link to={to} className='nav-link'>
            <figure>
                <img src={icon} />
            </figure>
            <p>{name}</p>
        </Link>
    )
}

export default NavIcon;