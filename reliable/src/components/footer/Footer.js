import React from "react";
import "./footer.css";
import { Col, Row } from "antd";
import LogoFooter from "../../assets/logo-footer.png";
import PinIcon from "../../assets/pin-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="wrapper">
          <Row gutter={[8, 48]}>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <div>
                <img className="footer-section-image" src={LogoFooter} alt="" />
              </div>
            </Col>
            <Col xs={8} sm={8} md={6} lg={6} xl={6}>
              <h2>Services</h2>
              <ul>
                <li> Home </li>
                <li> Internet Service </li>
                <li> Web Services </li>
                <li> contact </li>
              </ul>
            </Col>
            <Col xs={16} sm={16} md={8} lg={8} xl={8}>
              <h2> Contact </h2>
              <div className="footer-section-phone">
                <h6>Address</h6>
                <div className="footer-section-phone-text">
                <div className="footer-section-address-image">
                  <img src={PinIcon} alt="" />
                  </div>
                  <div>
                  <span> 4 - 2712 37th Ave NE, Calgary, AB T1Y5L3 Canada</span>
                </div>
              </div>
              </div>
              <div className="footer-section-address">
                <h6>Phone</h6>
                <div className="footer-section-address-image">
                  <img src={PhoneIcon} alt="" />
                  <span> (92 3112157277) </span>
                </div>
              </div>
            </Col>
          </Row>
          </div>

          <div className="footer-section-copyright">
          <div className="wrapper">
          <Row gutter={[0, 48]}>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <p> © 2022 
              <a href="/"> Reliable Internet.</a>
              All Rights Reserved. </p>
            </Col>
            <Col md={4} lg={6} xl={7}></Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={7}>
              <p>Terms And Conditions Bookmark</p>
            </Col>
          </Row>
          </div>
          </div>
      </div>
    </>
  );
};

export default Footer;
