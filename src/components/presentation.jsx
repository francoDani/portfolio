import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faGit, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Animation from './animation'

const presentation = () => {
    return (

        <div className="landing-container__sign-container">
                <h1 className="name">Franco <span>Danielsen</span></h1>
                <h2 className="frontend">Frontend web Developer</h2>
                <ul>
                    <li><a href="https://instagram.com/francodanielsen" target="_blank"><FontAwesomeIcon icon={faInstagram} href="" /></a></li>
                    <li><a href="https://github.com/francoDani" target="_blank"><FontAwesomeIcon icon={faGit} /></a></li>
                    <li><a href="https://www.linkedin.com/in/francodanielsen" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
        </div>
    )
}

export default presentation;