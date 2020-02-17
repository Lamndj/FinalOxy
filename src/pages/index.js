import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

import "../components/home.css"

const IndexPage = () => (
    <>
    <div className="homePage">
      <Link to="/Team"><img src={logo}></img></Link>
    </div>
    </>
)

export default IndexPage
