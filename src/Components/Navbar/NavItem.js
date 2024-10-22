import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ children, className, setState, path, linkClassname }) => {
    return (
        <li className={className} ><Link className={`block w-full h-full flex items-center`} to={path} onClick={(e) => setState(e.target.textContent)} >{children}</Link></li>
    )
}

export default NavItem