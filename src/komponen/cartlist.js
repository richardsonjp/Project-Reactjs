import React, { Component } from 'react';
import '../../src/App.css';
import { connect } from 'react-redux';

class Cartlist extends Component{

    render(){
        return(
            <div>
                <center>
                <h1>
                {this.props.display}'s Cart list:
                </h1>
                </center>

                <div className="tablecart">
                <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>
                </div>
                </div>
                
                <div className="tablecart">
                <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    const display = state.displaylogin;
    return{
        display
    }
  }
  

export default connect (mapStateToProps) (Cartlist)