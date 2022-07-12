import './footer.css';

import { useUser} from "../../context/UserContext"
import {useNavigate } from 'react-router-dom';

import githubLogoIcon from '../../assets/utils/github-logo.svg'
import linkedinIcon from '../../assets/utils/logo-linkedin.svg'

import LinkIcon from '../linkIcon/LinkIcon';

const Footer = ()=>{
    
    const [user] = useUser();
    
    const navigate = useNavigate();
    
    if(user)return(
        <footer>
            <div>
                <p>This page is part of Karim and Isaac's final project for Hack a Boss. Thanks for visiting the page and I hope you like it.</p>
            </div>
            <div>
                <LinkIcon name='Isaac' to='https://github.com/Isuapp/training-app' icon={githubLogoIcon}/>
                <LinkIcon name='Isaac' to='https://github.com/Isuapp/training-app' icon={linkedinIcon}/>
                <LinkIcon name='Karim' to='https://github.com/korodum/TrainingAppBack' icon={githubLogoIcon}/>
                <LinkIcon name='Karim' to='https://github.com/Isuapp/training-app' icon={linkedinIcon}/>
            </div>
        </footer>
    )
}

export default Footer;