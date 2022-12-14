import React from "react"
import {graphql, Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({data}) => {
    const { Name, Company, Address, Address2 } = data.site.siteMetadata.contact;
    return (
        <Layout>
        <Seo title="Home"/>
        <h1>Contact Us</h1>
        <p>Please send all inquiries to:</p>
        <div>{Company}</div>
        <div>{`C/O ${Name}`}</div>
        <div>{Address}</div>
        <div>{Address2}</div>
        <div style={{maxWidth:`300px`, marginBottom: `1.45rem`}}>
        <StaticImage
        src="../images/barn.jpg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Gatsby Icon"
        style={{marginBottom: `1.45rem`}}
        />
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact
export const query = graphql`
 query {
    site {
      siteMetadata {
        contact {
          Name
          Company
          Address
          Address2
        }
      }
    }
  }
`
