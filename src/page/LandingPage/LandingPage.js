import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid
} from "semantic-ui-react";
//Carousel
import Carousel from "nuka-carousel";
import { Helmet } from "react-helmet";
import './style.scss';

const LandingPage = (props) => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Đồng nhân Project</title>
      </Helmet>
      <section id="slides">
        <Carousel swiping={true} autoplay={true} renderCenterLeftControls={({ previousSlide }) => (
          <i className="fas fa-chevron-left" onClick={previousSlide} style={{ fontSize: '4vw' }} />
        )}
          renderCenterRightControls={({ nextSlide }) => (
            <i className="fas fa-chevron-right" onClick={nextSlide} style={{ fontSize: '4vw' }} />
          )}>
          <img
            src="http://coreasiapm.com/wp-content/uploads/2016/05/Banner1.jpg"
            alt="banner"
          />
          <img
            src="http://coreasiapm.com/wp-content/uploads/2016/05/Banner2.jpg"
            alt="banner"
          />
          <img
            src="http://coreasiapm.com/wp-content/uploads/2016/05/Banner3.jpg"
            alt="banner"
          />
          <img
            src="http://coreasiapm.com/wp-content/uploads/2016/05/Banner4.jpg"
            alt="banner"
          />
        </Carousel>
      </section>
      <Container className="container-primary">
        <section className="caption-body">
          <p>Kết tinh tri thức và công nghệ hiện đại cho giá trị bền vững.</p>
        </section>
        <section style={{ margin: "50px 0 50px 0" }}>
          <h2 className="text-divider">
            <span>Dự án</span>
          </h2>
        </section>
        <section className="project-slides">
          <Grid columns={3}>
            <Grid.Row stretched>
              <Grid.Column mobile={16} computer={4}>
                <div className="column-project-image">
                  <div className="project-detail">
                    <h2>Khách sạn Sheraton Hạ Long</h2>
                  </div>
                  <img
                    className="project-image"
                    src="http://coreasiapm.com/wp-content/uploads/2017/10/DOUBLE-TREE-HALONG2-400x485.jpg"
                  />
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} computer={6}>
                <div className="column-project-image">
                  <div className="project-detail">
                    <h2>Khách sạn Sheraton Hạ Long</h2>
                  </div>
                  <img
                    className="project-image"
                    src="http://coreasiapm.com/wp-content/uploads/2016/04/PostHotel_Hinhdaidien-400x220.jpg"
                  />
                </div>
                <div className="column-project-image">
                  <div className="project-detail">
                    <h2>Khách sạn Sheraton Hạ Long</h2>
                  </div>
                  <img
                    className="project-image"
                    src="http://coreasiapm.com/wp-content/uploads/2017/10/thiet-ke-tropicana-nha-trang-night-02-400x220.jpg"
                  />
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} computer={6}>
                <div className="column-project-image">
                  <div className="project-detail">
                    <h2>Khách sạn Sheraton Hạ Long</h2>
                  </div>
                  <img
                    className="project-image"
                    src="http://coreasiapm.com/wp-content/uploads/2017/12/1-400x220.png"
                  />
                </div>
                <div className="column-project-image">
                  <div className="project-detail">
                    <h2>Khách sạn Sheraton Hạ Long</h2>
                  </div>
                  <img
                    className="project-image"
                    src="http://coreasiapm.com/wp-content/uploads/2018/06/sma-Copy-compressed-400x220.jpg"
                  />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
        <section>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column computer={8} mobile={16}>
                <h2 className="text-divider">
                  <span>Về chúng tôi</span>
                </h2>
                <br />
                <p style={{ textAlign: 'justify', lineHeight: '2em' }}>
                  CORE là đơn vị Tư vấn Xây dựng chuyên nghiệp, được phát
                  triển trên nền tảng những cá nhân xuất sắc từng giữ vai trò
                  lãnh đạo chủ chốt tại các tập đoàn tư vấn quốc tế lớn. <br /><br />Với
                  khát vọng trở thành đơn vị tư vấn chuyên nghiệp và được tin
                  cậy hàng đầu, CORE luôn đề cao việc kết tinh tri trức và
                  công nghệ hiện đại nhằm mang lại giá trị thiết thực, bền
                  vững cho Quý chủ đầu tư và các bên tham gia dự án.
                  </p>
              </Grid.Column>
              <Grid.Column computer={8} mobile={16}>
                <h2 className="text-divider">
                  <span>Đối tác nói về chúng tôi</span>
                </h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
        <br />
        <section className="caption-body">
          <Carousel
            cellSpacing={20}
            renderCenterLeftControls={({ previousSlide }) => (
              <i className="fa fa-arrow-left" onClick={previousSlide} />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <i className="fa fa-arrow-right" onClick={nextSlide} />
            )}
          >
            <Grid>
              <Grid.Row style={{ margin: '2em' }}>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-11.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-51.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-71.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-11.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row style={{ margin: '2em' }}>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-11.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-51.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-71.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-11.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid>
              <Grid.Row style={{ margin: '2em' }}>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-11.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-51.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-71.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16}>
                  <img
                    src="http://coreasiapm.com/wp-content/uploads/2014/07/doi-tac-11.jpg"
                    className="sponsor-logo"
                    alt="sponsor"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Carousel>
        </section>
        <section className="share-icons-container">
          <a href="#" className="share-icon">
            <i className="fas fa-envelope" />
          </a>
          <a href="#" className="share-icon">
            <i className="fab fa-facebook" />
          </a>
        </section>
      </Container>
    </Fragment>
  );
}

export default LandingPage;
