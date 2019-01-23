import React, { Component, Fragment } from 'react';
import {
    Container,
    Grid
} from "semantic-ui-react";
import './style.scss';
import { Helmet } from "react-helmet";

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
                        <h1 className="title-banner">Giới thiệu Đồng nhân</h1>
                    </Container>
                </section>
                <Container>
                    <br /><br />
                    <h4>CORE LÀ AI</h4>
                    <p>CORE là đơn vị Tư vấn Xây dựng chuyên nghiệp, được phát triển trên nền tảng những cá nhân xuất sắc từng giữ vai trò lãnh đạo chủ chốt tại các tập đoàn tư vấn quốc tế lớn.</p>
                    <p>Với khát vọng trở thành đơn vị tư vấn chuyên nghiệp và được tin cậy hàng đầu, CORE luôn đề cao việc kết tinh tri trức và công nghệ hiện đại nhằm mang lại giá trị thiết thực, bền vững cho Quý chủ đầu tư và các bên tham gia dự án.</p>
                    <h4>PHƯƠNG CHÂM HOẠT ĐỘNG</h4>
                    <p>Với quan điểm thành công của dự án cũng chính là thành công của CORE, CORE luôn nỗ lực trong mọi hoạt động để mang đến lợi ích cao nhất cho quý Chủ đầu tư và tất cả các bên tham gia dự án một cách bền vững.</p>
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
                                    Là CEO, thành viên sáng lập của CORE. Tốt nghiệp Thạc sĩ về quản lý chất lượng xây dựng 2005 tại Pháp (xếp hạng 1 của lớp). Hơn 10 năm kinh nghiệm, từng trải qua nhiều vị trí Giám đốc dự án, Giám đốc Chi nhánh, Phó Tổng Giám đốc của Apave Châu Á – Thái Bình Dương (Pháp).
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Name" colSpan="3">
                                    <img src="http://coreasiapm.chiliweb.org/wp-content/uploads/2014/03/t%E1%BA%A3i-xu%E1%BB%91ng.jpg" />
                                    <h4>♣ Hoàng Vũ</h4>
                                </td>
                                <td data-label="Age" colSpan="13">
                                    Quốc tịch Úc. Là thành viên sáng lập, Phó Tổng Giám đốc của CORE. 39 năm kinh nghiệm trong lĩnh vực Kỹ thuật công trình và Thiết kế nền móng; Quản lý xây dựng và Quản lý dự án. Tốt nghiệp Thạc sỹ Kỹ thuật công trình tại Úc, và tham gia nhiều dự án xây dựng tại Úc và Việt Nam. Đặc biệt, từng nắm giữ các vị trí quản lý cấp cao của Bộ Xây dựng và các Công ty Xây dựng, Tư vấn quốc tế có uy tín như Transfield Construction, Permasteelisa, Meinhardt, Aurecon, Cofico.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
                <br /><br /><br /><br /><br /><br />
            </Fragment>
        );
    }
}

export default About; 