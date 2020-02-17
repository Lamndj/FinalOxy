import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import Image from "../components/image"
import Zoom from "react-reveal/Zoom"
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from "react-reveal/Fade"
import Roll from "react-reveal/Roll"

import "../components/SingleMember/SingleMember.css"

export default function Member({data}) {
        
    return (
        <>
        <Navbar title="Meet Our Gems"/>
        {data.allMarkdownRemark.edges.map(({node}) => 
            <div className="memberCard">
                <div className="memberImg">
                    <Zoom duration={1000}><Image/></Zoom> 
                </div>
                <div className="socialMedia">
                <Roll right duration={500} delay={500}>
                    <a href="https://www.facebook.com"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.instagram.com"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.twitter.com"><i class="fab fa-twitter fa-2x"></i></a>
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