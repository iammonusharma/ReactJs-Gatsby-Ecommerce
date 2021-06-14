import { Link } from 'gatsby'
import React, { Component } from 'react'
import logo from "../../images/logo.png"
import {FaCartArrowDown} from "react-icons/fa"

export default class Navbar extends Component {
    state={
        navbarState:false,
        navbarClass:"collapse navbar-collapse",
        menus:[{
            id:1,
            url:"/",
            text:"Home",
        },{
            id:2,
            url:"/About",
            text:"About",

        },{
            id:3,
            url:"/Contact",
            text:"Contact Us",
        }
    ]
    }
    myToggler=()=>{
        this.state.navbarState ? this.setState({
            navbarState:false,
            navbarClass:"collapse navbar-collapse"
        }):this.setState({
            navbarState:true,
            navbarClass:"collapse navbar-collapse show"
        })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme nav-link text-black">
                <Link to="/" className="navbar-brand ml-5 nav-link text-black">
                <img src={logo} width="40px" alt="logo"/>
               Learn By Self
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                onClick={this.myToggler}
                >
                    <span className="text-black">Menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu=>{
                            return(
                                <li key={menu.id} className="nav-item">
                            <Link to={menu.url} className="nav-link text-black">{menu.text}</Link>
                        </li>
                            )
                        })}
                        <li className="nav-item">
                            <Link to="https://easyreactstarter.netlify.app/#!/cart" 
                            className="nav-link text-black">
                                <FaCartArrowDown className="nav-icon text-black"/>
                            </Link>
                        </li>
                    </ul>

                </div>
                
            </nav>
        )
  }
}
