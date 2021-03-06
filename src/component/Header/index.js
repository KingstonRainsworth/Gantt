import React from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';

const HeaderMenu = () => (
  <Container>
    <Menu secondary>
      <Menu.Item icon fitted="horizontally">
        <Icon name="facebook square" />
      </Menu.Item>
      <Menu.Item icon fitted="horizontally">
        <Icon name="instagram" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="phone" />
          +(84)2822405416
        </Menu.Item>
        <Menu.Item>
          <Icon name="mail outline" />
          info@gantt.vn
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
);

export default HeaderMenu;
