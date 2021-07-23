import React from 'react'
import Heading from "./Heading"
// import {Link} from "gatsby"
export default function Dualinfoblock({heading,imgLink}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
            <Heading title={heading}/>
            <div className="row">
                 <div className="col-8 mx-auto">
                     <p className="lead  mb-5">
                         My Name is Monu Sharma.I am a MERN stack and React Native Developer.I love programming and other tech stuff.
                            I have a MCA degree from Guru Jambheshwar University Hisar Haryana which is a famous technological university.
                            I love cricket and other outdoor games as well.
                     </p>
                 </div>
                 <div className="col-4">
                    <div className="card bg-dark" >
                     <img src={imgLink} className="card-img-top" alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title text-success text-center">TheCoder7</h5>
                      <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="http://localhost:8000/" className="btn btn-primary btn-block">{heading}</a>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
