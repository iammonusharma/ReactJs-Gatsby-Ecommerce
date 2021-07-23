import React from 'react'
import { Link } from 'gatsby'
import Heading from "./Heading"
export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            My Name is Monu Sharma.I am a MERN stack and React Native Developer.I love programming and other tech stuff.
                            I have a MCA degree from Guru Jambheshwar University Hisar Haryana which is a famous technological university.
                            I love cricket and other outdoor games as well.
                        </p>
                        <Link to="/About">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
