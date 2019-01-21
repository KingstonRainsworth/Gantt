import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import indexRoutes from './route/index.js';

import Navbar from './component/Navbar';
import Footer from './component/Footer';

//CSS
import './style/styleIndex.scss';

class App extends Component {
  render() { 
    return ( 
      <Fragment>
        <Navbar/>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
      <Footer/>
    </Fragment>
     );
  }
}
 


var hist = createBrowserHistory();
ReactDOM.render(<App/>, document.getElementById("index"));
