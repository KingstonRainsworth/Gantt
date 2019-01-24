import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    Image
} from "semantic-ui-react";
import './style.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            slide: 0,  // How much should the Navbar slide up or down
            lastScrollY: 0,  // Keep track of current position in state
            navbarShow: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount (){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll (){
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100)
            this.setState({ navbarShow: true });
        else
            this.setState({ navbarShow: false });

    };
    render() {
        const { navbarShow } = this.state;
        return (
            <Fragment>
                <header className="navbar-header">
                    <div className="item-col1-header">
                        <ul>
                            <li>
                                <a href="/" style={{ color: "black" }}>
                                    Trang chủ
              </a>
                            </li>
                            <li>
                                <a href="/about">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="/service">Dịch vụ</a>
                            </li>
                            <li>
                                <a href="/news">Tin tức</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item-col2-header">
                        <ul>
                            <li>
                                <a href="/slogan">Vì sao chọn Đồng Nhân</a>
                            </li>
                            <li>
                                <a href="/project">Dự án</a>
                            </li>
                            <li>
                                <a href="/recruit">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="/contact">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item-col3-header">
                        <Image
                            src="http://coreasiapm.com/wp-content/plugins/qtranslate/flags/vn.png"
                            alt="vi-lan"
                        />
                        <Image
                            src="http://coreasiapm.com/wp-content/plugins/qtranslate/flags/gb.png"
                            alt="en-lan"
                        />
                    </div>
                    <div className="item-col4-header">
                        <Image
                            src="http://coreasiapm.chiliweb.org/wp-content/uploads/2016/04/logo-core-11.png"
                            alt="logo-dongnhan"
                        />
                    </div>
                    <div className="item-col1-col2-mobile-header">
                        <select style={{ width: "69vw" }}>
                            <option value="home" href="/">Trang chủ</option>
                            <option value="introduce" href="/about">Giới thiệu</option>
                            <option value="services" href="/service">Dịch vụ</option>
                            <option value="news" href="/news">Tin tức</option>
                            <option value="news" href="/slogan">Vì sao chọn Đồng Nhân</option>
                            <option value="news" href="/project">Dự án</option>
                            <option value="news" href="/recruit">Tuyển dụng</option>
                            <option value="news" href="/contact">Liên hệ</option>
                        </select>
                    </div>
                </header>
                <section className="navigation-wrapper" style={navbarShow ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}>
                    <div className='ui container'>
                        <div className="ui grid">
                            <div className="eight column row">
                                <div className="column" ><a href="/">Trang chủ</a></div>    
                                <div className="column"><a href="/about"></a>Giới thiệu</div>
                                <div className="column" ><a href="/service"></a>Dịch vụ</div>
                                <div className="column" ><a href="/news"></a>Tin tức</div>
                                <div className="column" ><a href="/slogan"></a>Vì sao chọn ĐN</div>
                                <div className="column" ><a href="/project"></a>Dự án</div>
                                <div className="column" ><a href="/recruit"></a>Tuyển dụng</div>
                                <div className="column" ><a href="/contact"></a>Liên hệ</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Navbar;