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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Voluptatibus repellat quia maiores exercitationem.
                           Nam voluptas blanditiis culpa ea facilis animi exercitationem, 
                           necessitatibus quaerat eligendi ipsa dignissimos non provident 
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
