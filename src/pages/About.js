import * as React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About Our Site"
    subtitle=""
    heroclass="about-background"
    />
    <Dualinfoblock heading="A message from CEO" imgLink="https://images.pexels.com/photos/8874234/pexels-photo-8874234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
    <Infoblock heading="About Our Vision"/> 
    <Teamphotosection/>
  </Layout>
)
export const query=graphql`{
  img: file(relativePath: {eq: "about.png"}) {
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

export default AboutPage
