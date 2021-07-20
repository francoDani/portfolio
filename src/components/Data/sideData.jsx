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
        tittle: "Projects",
        path: '/projects',
        icon: <FontAwesomeIcon icon = {faPuzzlePiece} />,
        cName: "projects"
    },
    {
        tittle: "Contact Me",
        path: '/contact',
        icon: <FontAwesomeIcon icon = {faEnvelope} />,
        cName: "contact"
    }
]

export default SidebarData;