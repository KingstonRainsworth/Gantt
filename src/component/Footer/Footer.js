import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './style.scss';
import { Container, Grid } from 'semantic-ui-react';
import ScrollUpButton from 'react-scroll-up-button';

const Footer = () => (
  <Fragment>
    <section className="copyright">
      <Container textAlign="center">
        <h1>Liên lạc chúng tôi để biết thêm chi tiết</h1>
      </Container>
    </section>
    <footer>
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column computer={8} mobile={16}>
              <ul className="noneUlStyle">
                <li className="ui medium header">Menu</li>
                <Link to="/">
                  <li>Trang chủ</li>
                </Link>
                <Link to="/about">
                  <li>Tìm hiểu thêm</li>
                </Link>
                <Link to="/service">
                  <li>Dịch vụ</li>
                </Link>
                <Link to="/project">
                  <li>Dự án</li>
                </Link>
                <Link to="/recruit">
                  <li>Tuyển dụng</li>
                </Link>
              </ul>
              <div className="ui icon input" style={{ width: '90%' }}>
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Tìm kiếm"
                />
                <i className="search icon" />
              </div>
            </Grid.Column>
            <Grid.Column computer={8} mobile={16}>
              <ul className="noneUlStyle">
                <li className="ui medium header">Thông tin liên hệ</li>
                <li>CÔNG TY TNHH GANTT</li>
                <li>
                  HCM: Đồng nhân office building, 90 Nguyễn Đình Chiểu, Phường
                  Dakao Quận 1 HCM
                </li>
                <li>Email: info@gantt.com</li>
                <li>Điện thoại: +84 28 6290 5586/7</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </footer>
    <ScrollUpButton />
  </Fragment>
);

export default withRouter(Footer);
