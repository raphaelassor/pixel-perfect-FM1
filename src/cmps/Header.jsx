import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {ReactComponent as MenuIcon} from '../assets/img/icon-menu.svg'

import {ReactComponent as Logo} from '../assets/img/logo.svg'

export class Header extends Component {
    render() {
       
        return <header className="main-header">
            <nav className="main-container flex align-center">
                <NavLink className="logo flex align-center" exact to="/"><Logo/></NavLink>
                <MenuIcon/>
                <ul className="clean-list  grow-full align-center">
                <li> <NavLink exact to="/">home</NavLink> </li>
                <li className="grow-full"><NavLink  exact to="/">about</NavLink></li>
                <li className="round-btn"><NavLink  exact to="/">contact us</NavLink></li>
                </ul>
            </nav>
        </header>
    }

}
