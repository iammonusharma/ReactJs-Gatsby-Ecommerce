import * as React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Coursecart from '../components/Cart/Coursecart'
import BundleCart from "../components/Cart/BundleCart"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Monika Cart"
    subtitle="Learnbyself.in"
    heroclass="hero-background"
    />
    <Infoblock heading="About Us"/> 
    <Coursecart mycourses={data.mycourses}/>
    <BundleCart myBundles={data.myBundles}/>
    
    <Dualinfoblock heading="Our Team" imgLink="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
  </Layout>
)
export const query=graphql`{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  
  myBundles:allContentfulBundles {
    edges {
      node {
        id
        title
        price
        image {
          fixed(width: 200, height: 120) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  
  
  mycourses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image {
          fixed(width: 200, height: 120) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
