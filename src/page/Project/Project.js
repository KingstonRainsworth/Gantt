import React, { Component, Fragment } from 'react';
import {
    Container,
    Grid
} from "semantic-ui-react";
import './style.scss';
import { Helmet } from "react-helmet";

/* {url: '', title: ''} template*/

const data = [
    [
        { url: 'http://coreasiapm.com/wp-content/uploads/2018/06/sma-Copy-compressed-380x380.jpg', title: 'Resort Sao Mai Anh' },
        { url: 'http://coreasiapm.com/wp-content/uploads/2018/06/d2-23-2-380x380.jpg', title: 'Chung cư D2 -D3' },
        { url: 'http://coreasiapm.com/wp-content/uploads/2017/12/1-380x380.png', title: 'Căn hộ Panorama' },
        { url: 'http://coreasiapm.com/wp-content/uploads/2017/12/River-Panorama-An-Gia-380x380.png', title: 'Căn hộ Panorama' }
    ],
    [
        { url: 'http://coreasiapm.com/wp-content/uploads/2017/12/Lavita-Charm-380x380.jpg', title: 'Căn hộ Lavita Charm' },
        { url: 'http://coreasiapm.com/wp-content/uploads/2017/12/VCR-380x380.png', title: 'Cao ốc Thương mại 04 Thi Sách' },
        { url: 'http://coreasiapm.com/wp-content/uploads/2017/12/Chung-cu-Citizen-New-380x380.jpg', title: 'Chung cư Citizen Trung Sơn' },
        { url: 'http://coreasiapm.com/wp-content/uploads/2017/10/thiet-ke-tropicana-nha-trang-night-02-380x380.jpg', title: 'Khách sạn Tropicana Nha Trang' }
    ],
]

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