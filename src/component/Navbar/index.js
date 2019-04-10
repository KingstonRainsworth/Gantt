import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Menu,
  Container,
  Image,
  Responsive,
  Dropdown,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/gantt.png';
import './style.scss';
const Navbar = props => (
  <Container>
    <Responsive minWidth={650}>
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
          <Menu.Item active={props.location.pathname === '/project'}>
            <Link to="/project">PROJECT</Link>
          </Menu.Item>
          <Menu.Item active={props.location.pathname === '/recruit'}>
            <Link to="/recruit">RECRUIT</Link>
          </Menu.Item>
          <Menu.Item active={props.location.pathname === '/contact'}>
            <Link to="/contact">CONTACT</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Responsive>
    <Responsive maxWidth={650}>
      <Menu secondary>
        <Menu.Item header fitted="horizontally">
          <Image size="small" alt="logo" src={Logo} href="/" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown icon="bars" item className="icon">
            <Dropdown.Menu>
              <Dropdown.Item active={props.location.pathname === '/'}>
                <Link to="/">HOME</Link>
              </Dropdown.Item>
              <Dropdown.Item active={props.location.pathname === '/about'}>
                <Link to="/about">ABOUT US</Link>
              </Dropdown.Item>
              <Dropdown.Item active={props.location.pathname === '/project'}>
                <Link to="/project">PROJECT</Link>
              </Dropdown.Item>
              <Dropdown.Item active={props.location.pathname === '/recruit'}>
                <Link to="/recruit">RECRUIT</Link>
              </Dropdown.Item>
              <Dropdown.Item active={props.location.pathname === '/contact'}>
                <Link to="/contact">CONTACT</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Responsive>
  </Container>
);

Navbar.propTypes = {
  location: PropTypes.object,
};
export default withRouter(Navbar);
