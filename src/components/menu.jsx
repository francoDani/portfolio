import React, { useState } from 'react';
import Mark from './mark';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarData from './Data/sideData'



const Menu = () => {


    const blockOverflow = () => {        
        if (sidebar){
            document.body.style.overflowY = "auto";                    
        }else{
            document.body.style.overflowY = "hidden";               
        }
    }

    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () =>{
             setSidebar(!sidebar)
             if(window.screen.width < 900){
                blockOverflow();                           
             };
            
        }

    

    return (
        <div className="landing-container__menu">
            <button className={!sidebar ? 'mainBtn' : 'hiddenBtn'} onClick={showSideBar}><FontAwesomeIcon icon={faBars} /> </button>
            <div className={sidebar ? 'navContainer show' : 'navContainer hidden'} onClick={showSideBar}>
            <button className={sidebar ? 'mainBtn' : 'hiddenBtn'} ><FontAwesomeIcon icon={faTimes} /> </button>                
                <ul id="navigation">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} onClick={showSideBar}>
                               <Link to={item.path}><i>{item.icon}</i>  {item.tittle}</Link>
                            </li>                            
                        )
                    })}
                </ul> 
                <Mark />
            </div>
        </div>
    )
}


export default Menu;
