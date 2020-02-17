import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import Contact from "../components/Contact/Contact"

export default function ContactUs(){
    
    return(
        <>
            <Navbar title="Contact Us"/>
            <Contact/>
        </>
    )
}