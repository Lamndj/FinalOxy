import React from "react"
import {Link } from "gatsby"
import {graphql} from "gatsby"
import Image from "../components/image"
import Navbar from "../components/Navbar/Navbar"

import "../components/TeamMember/TeamMember.css"

export default function Team({data}){ 
    
    return( 
    <>
    <Navbar title="Our Team"/>
    <div className="container">
    <div className="team-page">

        {data.allMarkdownRemark.edges.map(({node}) => 

        <div className="team-card">
            <Image/>
            <Link to="/Member"><h3>{node.frontmatter.memberName}</h3></Link>
            <p style={{fontWeight:"bold"}}>{node.frontmatter.memberPost}</p>
            <p style={{marginBottom:20}}>{node.frontmatter.postDesc}</p> 
        </div>
        
        )}
    </div>
    </div>
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
                postDesc
            }
            }
        }
    }
}
`