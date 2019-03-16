import React, { Component, Fragment } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './style.scss';
import { Helmet } from 'react-helmet';
import Pic1 from '../../assets/001.jpg';
import Pic2 from '../../assets/C.jpg';
import Bvpq from '../../assets/BVPQ.jpg';
import Ctf from '../../assets/Ctf.jpg';
import Taf from '../../assets/v1.jpg';

/* {url: '', title: ''} template*/

const data = [
  [
    {
      url: Pic2,
      title: 'Toyota Tây Ninh',
    },
    {
      url: Bvpq,
      title: 'Bệnh viện phụ sản quốc tế',
    },
    {
      url: Pic1,
      title: 'Trung tâm lexus Sài Gòn',
    },
    {
      url: Ctf,
      title: 'Cần thơ Ford',
    },
  ],
  [
    {
      url: Taf,
      title: 'Toyota Asta Fukushima',
    },
  ],
];

class Project extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dự án</title>
        </Helmet>
        <section id="banner">
          <img src="http://coreasiapm.com/wp-content/uploads/2016/05/BN-trang-trong1.jpg" />
          <Container style={{ position: 'relative' }}>
            <h1 className="title-banner">Dự án</h1>
          </Container>
        </section>
        <Container style={{ margin: '7em 0' }}>
          <section className="project-slides-page">
            <Grid container>
              {data.map((row, index) => (
                <Grid.Row key={index}>
                  {row.map((column, pos) => (
                    <Grid.Column computer="4" mobile="16" tablet={8} key={pos}>
                      <div className="column-project-image">
                        <div className="project-detail">
                          <h2>{column.title}</h2>
                        </div>
                        <img
                          className="project-image"
                          src={column.url}
                          alt={column.title}
                        />
                      </div>
                    </Grid.Column>
                  ))}
                </Grid.Row>
              ))}
            </Grid>
          </section>
        </Container>
      </Fragment>
    );
  }
}

export default Project;
