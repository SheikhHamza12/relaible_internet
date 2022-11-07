import React from "react";
import "./content.css";
import { Col, Row } from "antd";
import SectionListIcon1 from "../../assets/mbps-icon.svg";
import SectionListIcon2 from "../../assets/rocket-icon.svg";
import SectionListIcon3 from "../../assets/layer-icon.svg";
import SectionImage from "../../assets/plan-img-default-img.png";
import HoverImage from "../../assets/plan-img-hover.png";
import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import HeaderContent from "../header/HeaderContent";
const Content = () => {
  const [over, setOver] = useState(false);
  return (
    <>
    <Header/>
    <HeaderContent/>
      <div className="wrapper">
        <div className="content-section">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="content-section-left">
                <h3>choose your plan</h3>
                <h1>From Fast To Crazy-Fast, We Don't Do Slow.</h1>
                <p>
                  All Plans Comes With Symmetrical (Equal) Upload And Download
                  Speed.
                </p>
              </div>
              <div className="content-section-list">
                <ul>
                  <li>
                    <p>
                      <span>
                        <img src={SectionListIcon1} alt="" />
                      </span>
                      <div>
                        <span> 100 </span>
                        <span>/Mbps </span>
                      </div>
                      <span> $50 </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <img src={SectionListIcon2} alt="" />
                      </span>
                      <div>
                        <span> 1 </span>
                        <span>/GB</span>
                      </div>
                      <span> $100 </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        <img src={SectionListIcon3} alt="" />
                      </span>
                      <div>
                        <span> 10 </span>
                        <span>/GB & More</span>
                      </div>
                      <span> Contact Us </span>
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              className="content-section-right"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <div
                className="content-section-right-image"
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}>
                <img src={over ? SectionImage : HoverImage} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Content;
