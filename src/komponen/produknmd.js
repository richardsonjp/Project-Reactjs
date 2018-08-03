import React, { Component } from 'react';
import '../../src/App.css';

import { Link, Route } from 'react-router-dom';

import {connect} from 'react-redux'
import axios from 'axios'


class Produknmd extends Component{
state={
  nama_product: ' ',
  description: '',
  stock: '',
  harga: '',
  img_gbr: ''
}
buynow(){
  alert('item added to cart')
}
  componentDidMount(){
    axios.get('http://localhost:3210/product/1')
    .then((x)=>{
    this.setState({nama_product: x.data.result[0].nama_product});
    this.setState({description: x.data.result[0].description});
    this.setState({stock: x.data.result[0].stock});
    this.setState({harga: x.data.result[0].harga});
    this.setState({img_gbr: x.data.result[0].img_src});
    })
  }
    render(){
        return(
            <div id="card-produk">          
            <div class="card mb-3">
              <img class="card-img-top" src='../img/adidascard1.jpg' alt="img_gbr"/>
              <div class="card-body">
                <h5 class="card-title">{this.state.nama_product}</h5>
                <p class="card-text">{this.state.description}</p>
                <p class="card-text">${this.state.harga}</p>
                <p class="card-text"><small class="text-muted">{this.state.stock} kicks left</small></p>
                <p id="buttonbeli"  onClick={()=>{this.buynow()}} class="btn btn-primary">Buy now</p>
              </div>
            </div>
          </div>
        )
    }
}

export default Produknmd


