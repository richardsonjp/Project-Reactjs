import React, { Component } from 'react';
import './App.css';
import Home from './Page/home'
import Brand from './Page/brand'
import AdidasPage from './Page/AdidasPage'
import produk1 from './Page/produk1';
import Loginpage from './Page/Loginpage';
import Registerpage from './Page/Registerpage'
import Shoppingcart from './Page/Shoppingcart'

import { Link, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'C:/Users/Dell/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import reducer from './reducer';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux'



class App extends Component {
  render() {
    const store = createStore(reducer,{},applyMiddleware(ReduxThunk))
    return(
      <Provider store = {store}>
      <div>
          <Route exact path="/" component={Home}/> 
          <Route path="/brands" component={Brand}/> 
          <Route path="/AdidasPage" component={AdidasPage}/>
          <Route path="/Produk1" component={produk1}/>
          <Route path="/Loginpage" component={Loginpage}/>
          <Route path="/Registerpage" component={Registerpage}/>
          <Route path="/Shoppingcart" component={Shoppingcart}/>
      </div>
      </Provider>
    );
  }
}

export default App;
