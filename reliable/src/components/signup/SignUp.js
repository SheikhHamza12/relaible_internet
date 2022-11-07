import React from "react";
import "./signup.css";
import { Col, Row } from "antd";
import SignupLogo from "../../assets/header-logo.png";
import SignupImage from "../../assets/login-left-img.png";
const SignUp = () => {
  return (
    <>
      <div className="signup">
        <div className="wrapper">
          <Row gutter={[48, 8]}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <img className="signup-header-image" src={SignupLogo} alt="" />
            </Col>
            <Col xs={4} sm={6} md={6} lg={8} xl={8}></Col>
            <Col xs={8} sm={6} md={6} lg={4} xl={4}>
              <button className="signup-button">
                <a href="/signup"> sign up </a>
              </button>
            </Col>
          </Row>

          <div className="signup-body">
            <Row gutter={[48, 8]}>
              <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                <img className="header-image" src={SignupImage} alt="" />
              </Col>

              <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                <h1>Sign Up</h1>

                <div className="signup-form">
                  <form action="">
                    <Row gutter={[48, 8]}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="fancy-label mb-3">
                          <label htmlFor="name" className="form-label">
                            Name <span>*</span>
                          </label>
                          <input
                            name="Your Name"
                            type="name"
                            className="form-control"
                            placeholder="French Lorem"
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row gutter={[48, 8]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="fancy-label ">
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ width: "150px" }}
                          >
                            Phone Number <span>*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="923112157277"
                            className="form-control"
                          />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="fancy-label ">
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ width: "150px" }}
                          >
                            {" "}
                            Email Address <span>*</span>
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
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="fancy-label">
                          <label htmlFor="name" className="form-label">
                            Name <span>*</span>
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
                  </form>
                </div>
              </Col>
            </Row>
          </div>

          <Row gutter={[48, 8]}>
            <Col xs={8} sm={9} md={9} lg={10} xl={10}></Col>
            <Col xs={8} sm={6} md={6} lg={4} xl={4}>
              <button className="signup-button">
                <a href="/signup"> sign up </a>
              </button>
            </Col>
            <Col xs={8} sm={9} md={9} lg={10} xl={10}></Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default SignUp;
