import React from 'react';
import './PFooter.css';
import './SocialBtn'
import SocialBtn from './SocialBtn';
import {logos,icons} from '../assets/images'

function PFooter(){
    return(
        <div className="footer pb-4 mt-5 border-top border-dark border-gradient">
            <div className="row w-100 mt-2">
                <div className="col d-flex align-items-end">
                    <div className="container-fluid d-flex justify-content-center gap-4 pt-4">
                        <small>© 2025 Peter M</small>
                    </div>
                </div>
                <div className="col">
                    <div className="container-fluid d-flex justify-content-center gap-4 pt-4">
                        <SocialBtn
                        link="https://bsky.app/profile/petertres.bsky.social"
                        icon={logos.bskyLogo}/>
                        <SocialBtn
                        link="https://www.linkedin.com/in/pedro-mota95/"
                        icon={logos.linkedinLogo}/>
                        <SocialBtn
                        link="https://github.com/peter-tres"
                        icon={logos.githubLogo}/>
                        <SocialBtn
                        link="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=motap95@gmail.com"
                        icon={logos.emailLogo}/>
                    </div>
                </div>
            </div>

        </div>


    );
}




export default PFooter