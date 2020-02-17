import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

import "./Navbar.css"

export default function Navbar({title}){ 
    return(
        <>
        <div className="navbar">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <h3>{title}</h3>
            <Link to="/ContactUs"><i class="fas fa-phone-alt fa-2x"></i></Link>            
        </div>
        </>
    )
}

