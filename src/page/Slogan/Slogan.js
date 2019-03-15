import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import './style.scss';
import { Helmet } from 'react-helmet';

class Slogan extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vì sao chọn đồng nhân</title>
        </Helmet>
        <section id="banner">
          <img src="http://coreasiapm.com/wp-content/uploads/2016/05/BN-trang-trong1.jpg" />
          <Container style={{ position: 'relative' }}>
            <h1 className="title-banner">Vì sao chọn Đồng Nhân</h1>
          </Container>
        </section>
        <Container style={{ margin: '7em 0' }} id="content-slogan">
          <h3>Kết tinh tri thức và công nghệ hiện đại</h3>
          <p>
            Đội ngũ chuyên gia trong và ngoài nước của CORE với kinh nghiệm làm
            việc và quản lý tại các tập đoàn tư vấn quốc tế cam kết sẽ đáp ứng
            những yêu cầu cao nhất của quý Chủ đầu tư.
          </p>
          <p>
            Bên cạnh với đội ngũ chuyên gia kỹ thuật cao luôn linh hoạt đáp ứng
            các đặc thù khác nhau của từng dự án, CORE đang cùng các đối tác
            hàng đầu áp dụng công nghệ quản lý chất lượng tiên tiến như
            Construction Management Center (CMC), Virtual Reality (VR), Building
            Information Modelling (BIM).
          </p>
          <p>
            Đặc biệt, CORE là đơn vị đầu tiên tại Việt Nam sử dụng CMC trong quá
            trình quản lý thi công. Việc ứng dụng công nghệ tiên tiến không chỉ
            giúp CORE tối ưu hóa công việc mà còn giúp quý Chủ đầu tư và nhà
            thầu theo dõi, quản lý tiến độ dự án hiệu quả, online, on time.
          </p>
          <center>
            <img src="http://coreasiapm.chiliweb.org/wp-content/uploads/2016/04/ViSaoNenChonCore1.jpg" />
          </center>
          <h3>Mang đến dịch vụ tư vấn chất lượng, toàn diện</h3>
          <p>
            Bên cạnh các chuyên gia cơ hữu, CORE có khả năng huy động các chuyên
            gia hàng đầu trong nước và quốc tế trên nhiều lĩnh vực và mang đến
            dịch vụ tư vấn chất lượng, toàn diện từ giai đoạn ý tưởng cho đến
            khi vận hành dự án.
          </p>
          <h3>
            Hoàn thành dự án an toàn, trong ngân sách với chất lượng và tiến độ
            tốt nhất
          </h3>
          <p>
            Bằng tinh thần trách nhiệm, tư tưởng chính trực và thái độ tôn
            trọng, đội ngũ chuyên gia tinh thông nghề nghiệp của CORE cam kết
            giúp quý Chủ đầu tư hoàn thành dự án an toàn, trong ngân sách với
            chất lượng và tiến độ tốt nhất.
          </p>
          <center>
            <img src="http://coreasiapm.chiliweb.org/wp-content/uploads/2016/04/ViSaoNenChonCore2.jpg" />
          </center>
          <h3>Mang lại giá trị bền vững cho các bên tham gia dự án</h3>
          <p>
            CORE luôn nỗ lực học hỏi, nghiên cứu và đưa ra giải pháp sáng tạo,
            khả thi nhất để dự án mang lại giá trị thặng dư cao nhất cho quý Chủ
            đầu tư và các bên tham gia dự án.
          </p>
        </Container>
      </Fragment>
    );
  }
}

export default Slogan;
