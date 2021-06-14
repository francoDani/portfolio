import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faGit, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const presentation = () =>{
    return(
        
        <div className="presentation">
            <div className="decoration"></div>
            <div className="sign">
            <h1 className="name">Franco <span>Danielsen</span></h1>
            <h2 className="frontend">Frontend web Developer</h2>
            <ul>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faGit} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
            </ul>
            </div>
            <div className="decoration2"></div>
        </div>
    )
}

export default presentation;