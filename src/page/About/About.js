import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import './style.scss';
import { Helmet } from 'react-helmet';

class About extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Giới thiệu</title>
        </Helmet>
        <section id="banner">
          <img src="http://coreasiapm.com/wp-content/uploads/2016/05/BN-trang-trong1.jpg" />
          <Container style={{ position: 'relative' }}>
            <h1 className="title-banner">Về Gantt</h1>
          </Container>
        </section>
        <Container>
          <br />
          <br />
          <p>
            Công ty TNHH Tư Vấn Thiết Thiết Kế và Quản Lý Dự Án Gantt được Sở Kế
            Hoạch Đầu Tư Tp. HCM cấp chứng nhận thay đổi vào ngày 15/11/2018,
            được hình thành và chuyển đổi từ Công ty TNHH Tư vấn Xây dựng Minh
            Việt do sở Kế hoạch và Đầu tư TPHCM cấp ngày 9/02/2007.
          </p>
          <p>
            Với 11 năm kinh nghiệm trong lĩnh vực thiết kế và tư vấn xây dựng,
            Công ty TNHH Tư Vấn Thiết Kế và Quản Lý Dự Án Gantt luôn mang lại sự
            an tâm cho Quý Chủ đầu tư trong mọi dự án đã triển khai. Sự thành
            công qua các dự án lớn, nhỏ cùng với đội ngũ kiến trúc sư, kỹ sư
            nhiều năm kinh nghiệm giúp chúng tôi luôn tự tin về việc mang lại
            sản phẩm, dịch vụ chất lượng, tạo được niềm tin cho Quý Chủ Đầu Tư.
            Qua đây chúng tôi xin chân thành cảm ơn Quý khách hàng đã tin tưởng
            GANTT trong suốt thời gian qua, chúng tôi tự tin sẽ tiếp tục giữ
            vững niềm tin của Khách hàng trong tương lai cùng với sự phát triển
            ngày càng chuyên nghiệp của GANTT.
          </p>
          <h5>♥ SỨ MỆNH</h5>
          <p>Kết tinh tri thức và công nghệ hiện đại cho giá trị bền vững.</p>
          <h5>♥ TẦM NHÌN</h5>
          <p>Trở thành đơn vị tư vấn đáng tin cậy và chuyên nghiệp hàng đầu.</p>
          <h5>♥ VĂN HÓA</h5>
          <ul>
            <li>C: Commitment, Creativity / Cam kết, Sáng tạo</li>
            <li>O: Optimum, aspiratiOn / Tối ưu, Khát vọng</li>
            <li>R: Respect, Responsibility / Tôn trọng, Trách nhiệm</li>
            <li>E: intEgrity, lEarning / Chính trực, Học hỏi</li>
          </ul>
          <h4>NHÂN SỰ CHỦ CHỐT</h4>
          <table className="ui celled table" id="table-employee">
            <tbody>
              <tr>
                <td data-label="Name" colSpan="3">
                  <img src="http://coreasiapm.chiliweb.org/wp-content/uploads/2014/03/t%E1%BA%A3i-xu%E1%BB%91ng.jpg" />
                  <h4>♣ Vũ Hoàng</h4>
                </td>
                <td data-label="Age" colSpan="13">
                  Là CEO, thành viên sáng lập của CORE. Tốt nghiệp Thạc sĩ về
                  quản lý chất lượng xây dựng 2005 tại Pháp (xếp hạng 1 của
                  lớp). Hơn 10 năm kinh nghiệm, từng trải qua nhiều vị trí Giám
                  đốc dự án, Giám đốc Chi nhánh, Phó Tổng Giám đốc của Apave
                  Châu Á – Thái Bình Dương (Pháp).
                </td>
              </tr>
              <tr>
                <td data-label="Name" colSpan="3">
                  <img src="http://coreasiapm.chiliweb.org/wp-content/uploads/2014/03/t%E1%BA%A3i-xu%E1%BB%91ng.jpg" />
                  <h4>♣ Hoàng Vũ</h4>
                </td>
                <td data-label="Age" colSpan="13">
                  Quốc tịch Úc. Là thành viên sáng lập, Phó Tổng Giám đốc của
                  CORE. 39 năm kinh nghiệm trong lĩnh vực Kỹ thuật công trình và
                  Thiết kế nền móng; Quản lý xây dựng và Quản lý dự án. Tốt
                  nghiệp Thạc sỹ Kỹ thuật công trình tại Úc, và tham gia nhiều
                  dự án xây dựng tại Úc và Việt Nam. Đặc biệt, từng nắm giữ các
                  vị trí quản lý cấp cao của Bộ Xây dựng và các Công ty Xây
                  dựng, Tư vấn quốc tế có uy tín như Transfield Construction,
                  Permasteelisa, Meinhardt, Aurecon, Cofico.
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

export default About;
