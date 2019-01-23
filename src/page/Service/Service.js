import React, { Component, Fragment } from 'react';
import {
    Container,
    Grid
} from "semantic-ui-react";
import './style.scss';
import { Helmet } from "react-helmet";

class Service extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dịch vụ</title>
                </Helmet>
                <section id="banner">
                    <img src="http://coreasiapm.com/wp-content/uploads/2016/05/BN-trang-trong1.jpg" />
                    <Container style={{ position: 'relative' }}>
                        <h1 className="title-banner">Dịch vụ</h1>
                    </Container>
                </section>
                <Container style={{ margin: '7em 0' }} id="content-service">
                    <img src="http://coreasiapm.chiliweb.org/wp-content/uploads/2016/04/Dichvu.jpg" style={{ float: 'right', maxWidth: '320px' }} />
                    <p>
                        Để đảm bảo dự án hoàn thành đúng mục tiêu ngân sách, chất lượng, tiến độ và an toàn, dự án cần được quản lý một cách chuyên nghiệp, toàn diện từ giai đoạn lên ý tưởng, thiết kế, lựa chọn nhà thầu, thi công xây dựng đến khi nghiệm thu, bàn giao và đưa công trình vào khai thác sử dụng.
                    </p>
                    <p>
                        Bằng kinh nghiệm, năng lực chuyên môn và sự tận tâm cao nhất, CORE mong muốn là bạn đồng hành đáng tin cậy và hỗ trợ Chủ đầu tư với dịch vụ tư vấn toàn diện, chất lượng cao:
                    </p>
                    <ul>
                        <li>
                            <strong>Quản lý dự án</strong>: CORE cùng Chủ đầu tư phát triển dự án từ giai đoạn lên ý tưởng đầu tư, thay mặt Chủ đầu tư làm việc với các đơn vị thiết kế, thi công,… đến khi bàn giao công trình đi vào sử dụng.
                        </li>
                        <li>
                            <strong>Quản lý chi phí</strong>: CORE hỗ trợ Chủ đầu tư quản lý chi phí từ giai đoạn khái toán ngân sách, dự toán, đấu thầu, hợp đồng,… cho đến khi bàn giao và đưa công trình vào khai thác sử dụng.
                        </li>
                        <li>
                            <strong>Quản lý & Giám sát thi công:</strong>: Trong giai đoạn thi công, CORE cùng Nhà thầu Xây dựng hiện thực hóa ý tưởng của Chủ đầu tư với tiêu chí đảm bảo an toàn, ngân sách, chất lượng và tiến độ dự án.
                        </li>
                        <li>
                            <strong>Quản lý an toàn lao động, vệ sinh, môi trường (HSE):</strong>: Với những dự án đòi hỏi khắt khe về an toàn lao động, vệ sinh và môi trường, CORE cung cấp một dịch vụ riêng biệt nhằm đảm bảo dự án được triển khai một cách chuẩn mực nhất theo các quy chuẩn Quốc tế
                        </li>
                        <li>
                            <strong>Kiểm tra và tối ưu hóa thiết kế:</strong>: Một sai lầm trong thiết kế có thể khiến dự án tiêu tốn nhiều triệu đô la hoặc thậm chí thất bại. Bằng kinh nghiệm và sự am hiểu kỹ thuật, CORE cùng Chủ đầu tư và Tư vấn thiết kế đưa ra giải pháp thiết kế ưu việt nhất và có hiệu quả kinh tế nhất.
                        </li>
                        <li>
                            <strong>Các tư vấn kỹ thuật khác:</strong>: Tùy theo yêu cầu của khách hàng, CORE có thể cung cấp một số dịch vụ tư vấn kỹ thuật khác như đánh giá hiện trạng công trình, định giá,…
                        </li>
                    </ul>
                    <p><strong>CORE cung cấp dịch vụ cho nhiều loại hình dự án:</strong></p>
                    <ul>
                        <li>
                            Khách sạn, Khu nghĩ dưỡng
                        </li>
                        <li>
                            Khu phức hợp, Khu đô thị
                        </li>
                        <li>
                            Trung tâm thương mại
                        </li>
                        <li>
                            Cao ốc Văn phòng
                        </li>
                        <li>
                            Căn hộ, Căn hộ dịch vụ
                        </li>
                        <li>
                            Công trình công cộng, Bệnh viện, Trường học,…
                        </li>
                        <li>
                            Hạ tầng giao thông: Đường bộ, Cảng biển, Hàng không
                        </li>
                        <li>
                            Công trình công nghiệp: Nhà máy, Nhà xưởng,…
                        </li>
                    </ul>
                    <p>
                        Với đội ngũ chuyên gia giàu kinh nghiệm cùng công nghệ quản lý chất lượng hiện đại, CORE mang đến dịch vụ tư vấn ưu việt, phù hợp với đặc thù riêng của từng dự án. Để biết thêm chi tiết dịch vụ của CORE cho dự án của Quý khách, xin hãy liên hệ với chúng tôi qua hotlines hoặc email info@coreasiapm.com. CORE luôn sẵn sàng để phục vụ.
                    </p>
                </Container>
            </Fragment>
        );
    }
}

export default Service; 