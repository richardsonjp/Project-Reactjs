import React, { Component } from 'react';
import '../../src/App.css';

import { Link, Route } from 'react-router-dom';


class Adidas extends Component{
    render(){
        return(

            <div className="ProductFolio" id="ProductFolio">
            <div className="container">
                 <h2> <img className="textlogo" src={require("../img/adidas1.png")} height="200px" width="200px"/> </h2>

            </div>
          
          
            <div className="ProductFolio-Grid">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12"><Link to="/produk1">
                  <div className="card-product">
                    <a href="#"><img alt="" className="card" src="img/adidascard1.jpg" height="280px" width="100%"/>
                      <div className="ProductFolio-over">
                        <div>
                          <h3 className="card-product-title">
                            <img className="tile "src="./img/adidas-logo2.png" width="80%"/>
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div></Link>
                </div>

                <div className="col-lg-3 col-sm-6 col-xs-12\">
                  <div className="card-product">
                    <a href="#"><img alt="" className="card-product" src="img/nikeair.jpg" height="280px" width="100%"/>
                      <div className="ProductFolio-over">
                        <div>
                          <h3 className="card-product-title">
                            <img className="tile "src="./img/nike.png" width="80%"/>
                          </h3>
                        </div>
                        
                      </div></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
    }
}

export default Adidas


