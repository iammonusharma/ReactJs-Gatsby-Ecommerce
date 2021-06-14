import * as React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contact from "../components/Contact/Contact"

const ContactPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Contact US"
    subtitle=""
    heroclass="about-background"
    />
    
    <Infoblock heading="Any Query?"/> 
    <Contact/>
  </Layout>
)
export const query=graphql`{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  mycourses: allContentfulCourses {
    edges {
      node {
        id
        title
        category
        description {
          description
        }
        image {
          fixed(width: 200, height: 120) {
            src
          }
        }
      }
    }
  }
}
`

export default ContactPage
