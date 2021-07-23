import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'

const getCaty=items=>{
    let holdItems=items.map(items=>{
        return items.node.category
    })
    let holdCategories=new Set(holdItems)
    let categories=Array.from(holdCategories)
    categories=["All",...categories]
    return categories
}

export default class Coursecart extends Component {
    constructor(props){
        super(props)
        this.state={
            mycourses:props.mycourses.edges,
            courses:props.mycourses.edges,
            mycatagories:getCaty(props.mycourses.edges)
        }
    }
    catyClicked=category=>{
        let keepItsafe=[...this.state.courses]
        if (category==="All"){
            this.setState(()=>{
            return {mycourses:keepItsafe}
        })
        } 
        else
        {
        let queryCourse=keepItsafe.filter(({node})=>node.category===category)
        this.setState(()=>{
            return {mycourses:queryCourse}
        })
         }
    }
    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Stuff" />
                        <div className="col-10 mx-auto text-center ">
                            {this.state.mycatagories.map((category,index)=>{
                                return(
                                    <button 
                                    type="button"
                                    className="btn btn-info m-3 px-3"
                                    key={index}
                                    onClick={()=>{
                                        this.catyClicked(category)
                                    }}
                                    >{category}</button>
                                )
                            })}
                        </div>
                      <div className="row">
                            {this.state.mycourses.map(({node}) => {
                            return (
                             <div
                            key={node.id}
                            className="col-11 col-md-6 d-flex my-3 mx-auto"
                            >
                            {/* <GatsbyImage image={node.image.fixed} alt=".." /> */}
                            <img src={node.image.fixed.src} alt=".." />
                            <div className="flex-grow-1 px-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-0">{node.title}</h6>
                                    <h6 className="mb-0 text-success">${node.price}</h6>

                                </div>
                                <p className="text-muted">
                                    <small>{node.description.description}</small>
                                    <div><small>{node.category}</small></div>
                                </p>
                                <button 
                                data-item-id={node.id}
                                data-item-name={node.title}
                                data-item-price={node.price}
                                data-item-url="http://localhost:8000/"
                                data-item-image={node.image.fixed.src}
                                className="btn btn-warning snipcart-add-item">Buy Now</button>
                             </div>
                            
                        </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        );
    }
}
