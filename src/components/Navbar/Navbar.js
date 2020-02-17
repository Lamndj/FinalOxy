import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import {IconContext} from "react-icons"
import {IoMdCall} from "react-icons/fa"

import "./Navbar.css"

import call from "../../images/callLogo.png"

export default function Navbar({title}){ 
    return(
        <>
        <div className="navbar">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <h3>{title}</h3>
            <Link className="contactIcon" to="/ContactUs"><img src={call}></img></Link>            
        </div>
        </>
    )
}

