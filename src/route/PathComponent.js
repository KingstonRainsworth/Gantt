import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default class PathComponent extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <Route
          path={this.props.path}
          component={this.props.component}
        />
        <Footer />
      </div>
    )
  }
}

PathComponent.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired,
}
