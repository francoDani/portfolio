import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarData from './sideData'


const Menu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);

    return (
        <div>
            <button className="mainBtn" onClick={showSideBar}><FontAwesomeIcon icon={faBars} /> </button>
            <div className={sidebar ? 'navContainer show' : 'navContainer'} onClick={showSideBar}>
                <button className="mainBtn" ><FontAwesomeIcon icon={faTimes} /> </button>
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
