import React from "react";
import { Col, Row } from "antd";
import "./header.css";
import ListIcon from "../../assets/list-icon.svg";
import MainBannerGif from "../../assets/animation_main_banner.gif";

const HeaderContent = () => {
  return (
    <>
    <div className="header">
    <div className="wrapper">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1 className="header-content-left">
                <span> reliable </span>
                <span> internet </span>
              </h1>
              <ul className="header-content-left-list">
                <li>
                  <span>
                    <img src={ListIcon} alt="" />
                  </span>
                  Ultra Fast Internet
                </li>
                <li>
                  <span>
                    <img src={ListIcon} alt="" />
                  </span>
                  Unlimited Data
                </li>
                <li>
                  <span>
                    <img src={ListIcon} alt="" />
                  </span>
                  Only $50 Monthly
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img
                className="header-content-right"
                src={MainBannerGif}
                alt=""
              />
            </Col>
          </Row>
          </div>
          </div>
    </>
  );
};

export default HeaderContent;
