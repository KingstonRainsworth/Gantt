import React, { Fragment } from 'react';
import './style.scss';
import { Container, Grid } from 'semantic-ui-react';
import ScrollUpButton from 'react-scroll-up-button';

const Footer = () => (
  <Fragment>
    <footer>
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column computer={5} mobile={16}>
              <ul className="noneUlStyle">
                <li className="ui medium blue header">
                  Vì sao nên chọn Đồng Nhân
                </li>
                <li>Kết tinh tri thức và công nghệ hiện đại</li>
                <li>Mang đến dịch vụ tư vấn chất lượng, toàn diện</li>
                <li>
                  Hoàn thành dự án an toàn, trong ngân sách với chất lượng và
                  tiến độ tốt nhất
                </li>
                <li>Mang lại giá trị bền vững cho các bên tham gia dự án</li>
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
            <Grid.Column computer={5} mobile={16}>
              <ul className="noneUlStyle">
                <li className="ui medium blue header">Thông tin liên hệ</li>
                <li>CÔNG TY TNHH QUẢN LÝ DỰ ÁN CORE ASIA</li>
                <li>HCM: Tòa nhà Arirang, 131 Trần Huy Liệu, HCM</li>
                <li>Email: info@coreasiapm.com</li>
                <li>Điện thoại: +84 28 6290 5586/7</li>
              </ul>
            </Grid.Column>
            <Grid.Column computer={5} mobile={16}>
              <ul className="listNews">
                <li className="ui medium blue header">Bài viết mới</li>
                <li>CORE TEAM – CÁC HOẠT ĐỘNG NỔI BẬT NỬA ĐẦU 2018</li>
                <li>TUYỂN DỤNG</li>
                <li>
                  Lễ Khởi Công Dự Án Doubletree By Hilton Ha Long Bay Hotel &
                  Condotel
                </li>
                <li>
                  Lễ Khởi Công Gói Thầu Phần Hầm, Phần Thân Và Hoàn Thiện Dự Án
                  Khách Sạn Liberty Central Đà Nẵng
                </li>
                <li>Core đồng tài trợ talkshow 16, defining log for bim</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </footer>
    <section className="copyright">
      <Container>
        <h4>© 2019 by Đồng Nhân</h4>
      </Container>
    </section>
    <ScrollUpButton />
  </Fragment>
);

export default Footer;
