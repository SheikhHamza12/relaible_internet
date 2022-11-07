import React from "react";
import "./contact.css";
import { Col, Row } from "antd";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PinIcon from "../../assets/pin-icon-outlined.svg";
import PhoneIcon from "../../assets/phone-icon-outlined.svg";

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <Header />
      </div>
      <div className="wrapper">
        <div className="contact-heading">
          <Row gutter={[48, 8]}>
            <Col xs={4} sm={5} md={7} lg={6} xl={7}></Col>
            <Col xs={16} sm={14} md={10} lg={12} xl={10}>
              <h3> SEND US MESSAGE </h3>
            </Col>
            <Col xs={4} sm={5} md={7} lg={6} xl={7}></Col>
          </Row>
          <Row gutter={[48, 8]}>
            <Col xs={24} sm={24} md={3} lg={2} xl={3}></Col>
            <Col xs={24} sm={24} md={18} lg={20} xl={18}>
              <h1> Stay Connected With Us </h1>
            </Col>
            <Col xs={24} sm={24} md={3} lg={2} xl={3}></Col>
          </Row>

          <Row gutter={[48, 8]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="contact-form">
                <form className="form-input">
                  <Row gutter={[48, 8]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <div className="contact-label ">
                        <label htmlFor="name" className="form-label">
                          Your Name <span>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="923112157277"
                          className="form-control"
                        />
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <div className="contact-label ">
                        <label htmlFor="name" className="form-label">
                          {" "}
                          Your Email <span>*</span>
                        </label>
                        <input
                          type="number"
                          placeholder="frenchlorem@gmail.com"
                          className="form-control"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[48, 8]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <div className="contact-label ">
                        <label htmlFor="name" className="form-label">
                          Your Subject <span>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="923112157277"
                          className="form-control"
                        />
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <div className="contact-label">
                        <label htmlFor="name" className="form-label">
                          Contact Number <span>*</span>
                        </label>
                        <input
                          type="number"
                          placeholder="923112157277"
                          className="form-control"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={[48, 8]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="contact-label">
                        <label htmlFor="name" className="form-label">
                          Contact Number <span>*</span>
                        </label>
                        <textarea
                          name="Address"
                          className="form-control-area"
                          placeholder="H # E-27 Block-B North Nazimabad, Karachi."
                          style={{ height: "150px" }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={[48, 8]}>
                    <Col xs={4} sm={6} md={8} lg={9} xl={9}></Col>
                    <Col xs={16} sm={12} md={8} lg={6} xl={6}>
                      <button className="submit-button">Submit</button>
                    </Col>
                    <Col xs={4} sm={6} md={8} lg={9} xl={9}></Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>

          <Row gutter={[48, 8]}>
            <div className="getin-heading">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <h4>contacts</h4>
                <h2>get in touch</h2>
              </Col>
            </div>
          </Row>

          <Row gutter={[48, 8]}>
            <div className="getin-address">
              <Col xs={3} sm={4} md={4} lg={4} xl={4}>
                <div className="pin-icon">
                  <img src={PinIcon} alt="" />
                </div>
              </Col>
              <Col xs={21} sm={20} md={20} lg={20} xl={20}>
                <div className="address-box">
                  <h5> Address </h5>
                  <p>4 - 2712 37th Ave NE, Calgary, AB T1Y5L3 Canada</p>
                </div>
              </Col>
            </div>
          </Row>

          <Row gutter={[48, 8]}>
            <div className="getin-address">
              <Col xs={3} sm={4} md={4} lg={4} xl={4}>
                <div className="pin-icon">
                  <img src={PhoneIcon} alt="" />
                </div>
              </Col>
              <Col xs={21} sm={20} md={20} lg={20} xl={20}>
                <div className="address-box">
                  <h5> Phone Number </h5>
                  <p> 923112157277 </p>
                </div>
              </Col>
            </div>
          </Row>

          <Row gutter={[48, 8]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="map-image">
              <iframe style={{width: "100%" , height:"500px"}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sir syed university&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
