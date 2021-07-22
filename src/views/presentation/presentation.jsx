import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faGit, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const presentation = () => {
    const onOff = () =>{
        let navigation = document.getElementById("navigation");
        let footer = document.getElementById("footer");
        navigation.classList.toggle('on');
        footer.classList.toggle('on');
    }

    return (

        <div className="landing-container__sign-container">
                <h1 className="name">Franco <span onClick={onOff}>Danielsen</span></h1>
                <h2 className="frontend">Frontend web Developer</h2>
                <ul>
                    <li><a href="https://instagram.com/francodanielsen" target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faInstagram} href="" id="a1"/></i></a></li>
                    <li><a href="https://github.com/francoDani" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGit}id="a2" /></a></li>
                    <li><a href="https://www.linkedin.com/in/francodanielsen" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} id="a3"/></a></li>
                </ul>
        </div>
    )
}

export default presentation;