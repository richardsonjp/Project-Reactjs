import React, { Component } from 'react';
import '../../src/App.css';
import Link from 'react-router-dom/Link';


import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

class Hero extends Component{
    render() {
        return (
    <div className="hero">
    <div className="container">
      <div className="row"  >
      <Fade>
        <div className="col-md-12">
          <a className="hero-brand" title="kikipipi"><Link to="/"><img alt="Kikipipi Logo" src="img/kipilogo.png" width="10%" height="10%"/></Link></a>
        </div>
      </Fade>
      </div>

      <div className="texthome">
        <Fade><h1>
            {this.props.display}
            <br/>
            Personalise your streets
          </h1></Fade>
        
        <Fade>
        <p className="tagline">
          Order now!
        </p>
        </Fade>
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


export default connect (mapStateToProps) (Hero)

// export default Hero