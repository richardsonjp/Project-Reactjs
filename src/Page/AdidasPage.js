import React, { Component } from 'react';
import Header from '../komponen/navbar'
import Adidas from '../komponen/Adidas'
import Footer from '../komponen/footer'


class AdidasPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Adidas/>
                <Footer/>
            </div>
        )
    }
}

export default AdidasPage;