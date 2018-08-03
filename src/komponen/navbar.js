import React, { Component } from 'react';
import '../../src/App.css';

import Home from '../Page/home'
import Brand from '../Page/brand'
import { Link, Route, Redirect } from 'react-router-dom';

import Popup from "reactjs-popup";

import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'
import {statlogin} from '../action'



class Header extends Component{
    statState = (x) =>{
        this.props.statlogin(x)
    }
    state={
        loginstate:<a id="sign-in"><Link to="/Loginpage"><i className="fa fa-sign-in"></i></Link></a>,
        linklogto:"/"
    }
    componentWillMount(){
        if(this.props.loginstat === true){
            var statlogin = false
            this.setState({loginstate:<a id="sign-in" href="" ><i className="fa fa-sign-out" onClick={()=>{this.statState(statlogin)}}></i></a>})
        }
        if(this.props.loginstat === false){
            this.setState({redirect_home: true})
        }
    }
    
    render() {
        const {redirect_home} = this.state

        if(redirect_home){
            this.setState({redirect_home: false});
            return(
                <Redirect to='/'/>
            )
        }
    return (
    <div>
        <Fade>
        <header id="header">
        <div className="container">

        <div id="logo" className="pull-left"><Link to ="/">
            <img src="img/kipilogo.png" alt="" title="home" /></Link>
            <h1><a href="#hero"></a></h1>
        </div>

        <nav id="nav-menu-container">
            <ul className="nav-menu">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li className="dropdown"><a href="">HOT OFFERS!</a>
                    <Fade><ul>
                    <li>HOT ITEMS!</li>
                    <li>Limited time discount</li>
                    <li>Limited Products</li>
                    </ul></Fade></li>
            <li><a href="#contact">Contact Us</a></li>
            <nav className="nav social-nav pull-right d-none d-lg-inline">

                    <a id="cart" title="shopping cart">
                    <Link to="/Shoppingcart">
                    <i className="fa fa-shopping-cart"></i>
                    </Link>
                    </a>
                    <Link to="/Shoppingcart">
                    <a id="numcart" title="" ><border id="cartout"><h5> </h5></border></a>
                    </Link>


                    <a id="ig-icon" title="instagram" href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" ></i></a> 
                    <a id="email-icon" title="email us"><i className="fa fa-envelope" ></i></a> 
                    {this.state.loginstate}
                </nav>
            </ul>
        </nav>
        
        </div>
        </header>
        </Fade>

    </div>

        )
    }
}


const mapStateToProps = (state) =>{
    const loginstat = state.statuslogin;
    return{
        loginstat
    }
  }
  

export default connect (mapStateToProps,{statlogin}) (Header)

