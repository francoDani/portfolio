import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPuzzlePiece, faUserAlt, faHome } from '@fortawesome/free-solid-svg-icons'

const SidebarData = [
    {
        tittle: "Home",
        path: '/',
        icon: <FontAwesomeIcon icon = {faHome} />,
        cName: "home"
    },
    {
        tittle: "About Me",
        path: '/about',
        icon: <FontAwesomeIcon icon = {faUserAlt} />,
        cName: "about"
    },
    {
        tittle: "Proyects",
        path: '/',
        icon: <FontAwesomeIcon icon = {faPuzzlePiece} />,
        cName: "proyects"
    },
    {
        tittle: "Contact Me",
        path: '/',
        icon: <FontAwesomeIcon icon = {faEnvelope} />,
        cName: "contact"
    }
]

export default SidebarData;