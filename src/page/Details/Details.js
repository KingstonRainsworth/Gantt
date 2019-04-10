//core
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
//style+css
import {
  Container,
  Grid
} from 'semantic-ui-react';

const Detail = (props) => {
  return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
      </Helmet>
      <section id="banner">
          <img src="http://coreasiapm.com/wp-content/uploads/2016/05/BN-trang-trong1.jpg" />
          <Container style={{ position: 'relative' }}>
              <h1 className="title-banner">{props.project || "aaaa"}</h1>
          </Container>
      </section>
      <Container style={{ margin: "20px" }}>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <img src = "http://www.coreasiapm.com/wp-content/uploads/2018/06/sma-Copy-compressed.jpg" />
            </Grid.Column>
            <Grid.Column>
              <ul>
                <li> Chu dau tu: </li>
                <li> Quy mo: </li>
                <li> Dich vu: </li>
                <li> Quanly: </li>
              </ul>
              <p>
                Dự án tọa lạc tại đường Phạm Văn Đồng phường Vĩnh Hòa,
                thành phố Biển Nha Trang, Sao Mai Anh resort là một khu nghỉ
                dưỡng đẳng cấp bao gồm khối khách sạn chính 4 tầng,
                khu dịch vụ Beachclub và 7 căn villas và đầy đủ các tiện ích
                như nhà hàng, hồ bơi, spa, café và  khu vực xanh … .
                Với nét độc đáo trong ý tưởng thiết kế cũng như tiêu chuẩn quốc
                tế mà Sao Mai Anh mang lại, resort hứa hẹn là địa điểm nghỉ dưỡng
                lý tưởng cho du khách ghé thăm
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Detail;
