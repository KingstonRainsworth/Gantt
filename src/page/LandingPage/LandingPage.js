import React, { Fragment } from 'react';
import { Container, Grid, Icon, Divider, Header } from 'semantic-ui-react';
//Carousel
import Carousel from 'nuka-carousel';
import { Helmet } from 'react-helmet';
import './style.scss';
import Pic1 from '../../assets/001.jpg';
import Pic2 from '../../assets/C.jpg';
import Pic3 from '../../assets/D.jpg';
import Pic4 from '../../assets/IMG_1123.jpg';
import Bvpq from '../../assets/BVPQ.jpg';
import Ctf from '../../assets/Ctf.jpg';
import Taf from '../../assets/v1.jpg';
const LandingPage = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Đồng nhân Project</title>
    </Helmet>
    <div className="slide-container">
      <Carousel
        swiping={true}
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <Icon
            name="caret left"
            onClick={previousSlide}
            style={{ fontSize: '4vw', color: '#d71921' }}
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Icon
            name="caret right"
            color="white"
            onClick={nextSlide}
            style={{ fontSize: '4vw', color: '#d71921' }}
          />
        )}
      >
        <img className="img-content " src={Pic1} alt="banner" />
        <img className="img-content " src={Pic2} alt="banner" />
        <img className="img-content " src={Pic3} alt="banner" />
        <img className="img-content " src={Pic4} alt="banner" />
      </Carousel>
    </div>
    <Divider horizontal>
      <div className="divider-text"> Khám phá </div>
    </Divider>
    <Container>
      <Grid columns={4} padded centered textAlign="center" stackable>
        <Grid.Column>
          <Header as="h1">
            <div className="stats-container">
              <Icon name={'id badge outline'} size="big" />
              <Header.Content className="stats-content">
                <div>1000+</div>
                <div> Nhân Viên </div>
              </Header.Content>
            </div>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h1">
            <div className="stats-container">
              <Icon name={'birthday cake'} size="big" />
              <Header.Content className="stats-content">
                <div>20+</div>
                <div> Năm </div>
              </Header.Content>
            </div>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h1">
            <div className="stats-container">
              <Icon name={'id badge outline'} size="big" />
              <Header.Content className="stats-content">
                <div>50+</div>
                <div> Dự án </div>
              </Header.Content>
            </div>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h1">
            <div className="stats-container">
              <Icon name={'globe'} size="big" />
              <Header.Content className="stats-content">
                <div>10+</div>
                <div> Vị trí </div>
              </Header.Content>
            </div>
          </Header>
        </Grid.Column>
      </Grid>
      <section style={{ margin: '50px 0 50px 0' }}>
        <h2 className="text-divider">
          <span>Dịch vụ</span>
        </h2>
      </section>
      <section style={{ margin: '50px 0 50px 0' }}>
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
                  <h2>Bệnh viện phụ sản quốc tế</h2>
                </div>
                <img className="project-image" src={Bvpq} />
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={6}>
              <div className="column-project-image">
                <div className="project-detail">
                  <h2>Toyota Tây Ninh</h2>
                </div>
                <img className="project-image" src={Pic2} />
              </div>
              <div className="column-project-image">
                <div className="project-detail">
                  <h2>Trung tâm lexus Sài Gòn</h2>
                </div>
                <img className="project-image" src={Pic1} />
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={6}>
              <div className="column-project-image">
                <div className="project-detail">
                  <h2>Cần thơ Ford</h2>
                </div>
                <img className="project-image" src={Ctf} />
              </div>
              <div className="column-project-image">
                <div className="project-detail">
                  <h2>Toyota Asta Fukushima</h2>
                </div>
                <img className="project-image" src={Taf} />
              </div>
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
    </Container>
  </Fragment>
);

export default LandingPage;
