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
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Voluptatibus repellat quia maiores exercitationem.
                           Nam voluptas blanditiis culpa ea facilis animi exercitationem, 
                           necessitatibus quaerat eligendi ipsa dignissimos non provident 
                           sapiente ut ducimus reiciendis quos beatae omnis! Eos soluta,
                            laboriosam quasi, tempore minima obcaecati praesentium rerum
                             dolore neque ducimus fuga assumenda minus.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime excepturi autem assumenda molestias dolorem velit nisi porro, a praesentium doloremque quos eveniet ex perferendis earum nesciunt sit adipisci natus id. Dolore quisquam blanditiis debitis doloribus, inventore obcaecati ea quis?
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
