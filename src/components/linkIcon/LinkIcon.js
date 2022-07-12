import './linkIcon.css';


const LinkIcon = ({to, icon, name})=>{

    return(
        <a href={to} className='link-link'>
            <figure>
                <img src={icon} />
            </figure>
            <p>{name}</p>
        </a>
    )
}

export default LinkIcon;