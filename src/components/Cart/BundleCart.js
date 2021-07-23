import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'

export default class BundleCart extends Component {
    constructor(props){
        super(props)
        this.state={
            myBundles:props.myBundles.edges,
        }
    }
    render() {
        return (
            <section className="py-5">
                <div className="container">
                <Heading title="Bundles" />
                    <div className="row">
                            {this.state.myBundles.map(({node}) => {
                            return (
                             <div
                            key={node.id}
                            className="col-11 col-md-6 d-flex my-3 mx-auto"
                            >
                            <img src={node.image.fixed.src} alt=".." />
                            <div className="flex-grow-1 px-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-0">{node.title}</h6>
                                </div>
                                <div>
                                    <h6 className="mt-2 text-success">RS{node.price}</h6>

                                </div>
                            
                                <button 
                                data-item-id={node.id}
                                data-item-name={node.title}
                                data-item-price={node.price}
                                data-item-url="http://localhost:8000/"
                                data-item-image={node.image.fixed.src}
                                className="btn btn-warning snipcart-add-item">
                                Buy Now
                                </button>
                             </div>
                            
                        </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        )
    }
}
