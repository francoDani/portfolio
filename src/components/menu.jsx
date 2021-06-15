import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarData from './sideData'


const Menu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);

    return (
        <div>
            <button className={!sidebar ? 'mainBtn' : 'hiddenBtn'} onClick={showSideBar}><FontAwesomeIcon icon={faBars} /> </button>
            <button className={sidebar ? 'mainBtn' : 'hiddenBtn'} ><FontAwesomeIcon icon={faTimes} onClick={showSideBar}/> </button>
            <div className={sidebar ? 'navContainer show' : 'navContainer hidden'} onClick={showSideBar}>
                
                <ul>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                {item.tittle}
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}


export default Menu;
