import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const ToggleTheme = () =>{
    const [theme, setTheme] = useState(false);
    const toggle = () =>{
        let root = document.querySelector("#root");
        if (theme){
            root.style.setProperty('--background-color', '#101020');
            root.style.setProperty('--darkerBg', '#151525');
            root.style.setProperty('--white', '#c3c5c2');
            root.style.setProperty('--span-color', '#119DA4');
            root.style.setProperty('--span-off', '#055b5f');
            root.style.setProperty('--detail-color', '#ff00c8');
        }else{
            root.style.setProperty('--background-color', '#c3c5c2');
            root.style.setProperty('--darkerBg', '#8d8d8c');
            root.style.setProperty('--white', '#101020');
            
        }
        setTheme(!theme);
    }
    
    return(
        <div>
            <button className="toggle-btn" onClick= {toggle}><FontAwesomeIcon icon={faLightbulb}/></button>
        </div>
    )
}

export default ToggleTheme; 