import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import indexRoutes from './route/index.js';

import Header from './component/Header';
import Navbar from './component/Navbar/index';
import Footer from './component/Footer';

//CSS
import './style/styleIndex.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Router history={hist}>
            <Fragment>
              <Header />
              <Navbar />
              <Switch>
                {indexRoutes.map((prop, key) => (
                  <Route
                    path={prop.path}
                    key={key}
                    component={prop.component}
                  />
                ))}
              </Switch>
              <Footer />
            </Fragment>
          </Router>
        </BrowserRouter>
      </Fragment>
    );
  }
}

var hist = createBrowserHistory();
ReactDOM.render(<App />, document.getElementById('index'));
