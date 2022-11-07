import React from "react";
import { Col, Row } from "antd";
import "./header.css";
import HeaderLogo from "../../assets/header-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <Row gutter={[48, 8]}>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <img className="header-image" src={HeaderLogo} alt="" />
            </Col>
            <Col xs={16} sm={18} md={8} lg={10} xl={10}>
              <div className="header-nav">
                <Link to="/">
                  <a href="/content"> home </a>
                </Link>
                <Link to="/contact">
                  <a href="/contact"> contact </a>
                </Link>
              </div>
            </Col>
            <Col xs={8} sm={6} md={6} lg={4} xl={4}>
              <Link to="/signup">
                {" "}
                <button className="header-nav-button">
                  {" "}
                  <a href="/signup"> sign up </a>
                </button>{" "}
              </Link>

            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Header;
