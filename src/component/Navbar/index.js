import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/gantt.png';
import './style.scss';
const Navbar = props => (
  <Container>
    <Menu secondary>
      <Menu.Item header fitted="horizontally">
        <Image size="small" alt="logo" src={Logo} href="/" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item active={props.location.pathname === '/'}>
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item active={props.location.pathname === '/about'}>
          <Link to="/about">ABOUT US</Link>
        </Menu.Item>
        <Menu.Item active={props.location.pathname === '/recruit'}>
          <Link to="/recruit">RECRUIT</Link>
        </Menu.Item>
        <Menu.Item active={props.location.pathname === '/contact'}>
          <Link to="/contact">CONTACT</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
);

Navbar.propTypes = {
  location: PropTypes.object,
};
export default withRouter(Navbar);
