import React from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/img/logo.svg'

import { ReactComponent as PinterestIcon } from '../assets/img/icon-pinterest.svg'
import { ReactComponent as FacebookIcon } from '../assets/img/icon-facebook.svg'
import { ReactComponent as TwitterIcon } from '../assets/img/icon-twitter.svg'

export function Footer() {

    return <div className=" footer-wrapper flex main-container">
        <div className="nav flex wrap">
            <div><NavLink className="logo " exact to="/"><Logo /></NavLink></div>
                <NavLink exact to="/"><span>home</span></NavLink>
                <NavLink to="/login">about</NavLink>
            
        </div>
        <div className="address ">
            <p>
                987  Hillcrest Lane
            <br />
            Irvine, CA
            <br />
            California 92714
            <br />
            Call Us : 949-833-7432
            </p>

        </div>
        <div className="flex  space-between">
            <div className=" social-icons flex ">
            <FacebookIcon/>
            <PinterestIcon/>
            <TwitterIcon/>
            </div>
            <i>Copyright 2020. All Rights Reserved</i>
        </div>
    </div>
}