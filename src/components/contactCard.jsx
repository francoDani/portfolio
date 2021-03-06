import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGit, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const contactCard = () =>{
    return(
        <div className="contact-card">            
            <h1>Contact Me</h1>
            <div className="contact-card__img"></div>
            <div className="contact-card__name-container"><h3>Danielsen Franco Ivan</h3></div>
            <ul>
                <li><span><i><FontAwesomeIcon icon={faLocationArrow}/> </i>Address:</span> Juan José paso 750</li>
                <li><span id="span1"><i><FontAwesomeIcon icon={faPhone}/> </i>Cellphone:</span> +54 9 381-6534-171</li>
                <li><span id="span2"><i><FontAwesomeIcon icon={faMailBulk}/> </i>Email: </span> franco.danielsen@gmail.com</li>
                <li><span id="span3"><i><FontAwesomeIcon icon={faLinkedin}/> </i>Linkedin: </span><a href="https://tini.to/0P3" target="_blank" rel="noreferrer">tini.to/0P3</a></li>
            </ul>            
        </div>
    )
}

export default contactCard;