import React from 'react'
import './SocialBtn.css';
import {logos} from '../assets/images'



function SocialBtn({link = "#", icon = logos.emailLogo, color = ""}) {
    return(
        <a className="btn btn-link px-0 py-0" href={link} target="_blank" rel="noopener noreferrer">
            <div className="social-btn" style={{color}}>
                {icon}
            </div>
        </a>

    )
}

export default SocialBtn