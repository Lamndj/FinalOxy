import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import Image from "../components/image"
import Zoom from "react-reveal/Zoom"
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from "react-reveal/Fade"
import Roll from "react-reveal/Roll"
import {IconContext} from "react-icons"
import {FaFacebookSquare,FaInstagram,FaTwitter} from "react-icons/fa"

import "../components/SingleMember/SingleMember.css"

export default function Member({data}) {
        
    return (
        <>
        <script src="https://kit.fontawesome.com/733b0420c0.js" crossorigin="anonymous"></script>
        <Navbar title="Meet Our Gems"/>
        {data.allMarkdownRemark.edges.map(({node}) => 
            <div className="memberCard">
                <div className="memberImg">
                    <Zoom duration={1000}><Image/></Zoom> 
                </div>
                <div className="socialMedia">
                <Roll right duration={500} delay={500}>
                    <a href="https://www.facebook.com">
                        <IconContext.Provider value={{ className: "fa-facebook", size:"2.5em"}}>
                        <FaFacebookSquare/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.instagram.com">
                        <IconContext.Provider value={{ className: "fa-instagram", size:"2.5em"}}>
                        <FaInstagram/>
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.twitter.com">
                        <IconContext.Provider value={{ className: "fa-twitter", size:"2.5em"}}>
                        <FaTwitter/>
                        </IconContext.Provider>
                    </a>
                </Roll>
                </div>
                <div className="memberBio">
                    <Fade left duration={1000}>
                        {node.internal.content}
                    </Fade>
                </div>
            </div>
        )}
        </>
    )
}

export const query = graphql`
{
    allMarkdownRemark {
        edges {
            node {
            html
            excerpt
            internal {
                content
                description
                ignoreType
                mediaType
            }
            frontmatter {
                title
                memberName
                memberPost
            }
            }
        }
    }
}
`