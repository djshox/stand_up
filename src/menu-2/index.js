import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

// import ReactPlayer from 'react-player';
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";
// import "./menu2.css";
import { BACKEND_URL } from "setting.js"
import './style.css'
import happy from './../images/happy.gif';

const contentStyle = {
    height: 'calc( 100vh - 200px)',
    border: "5px solid #0a1532",
    borderRadius: "10px"
};


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import ReactPlayer from 'react-player';
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";
// import "./menu2.css";

function Menu2() {
  const h = useHistory();

  return (
    <div className="menu-2-wrapper">
      <div className="_navbar">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => h.push("/")}>Home</Breadcrumb.Item>

          <Breadcrumb.Item active>Birthday</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="menu-birthday">
        <Carousel>
          <div className="item active">
            <img
              src={BACKEND_URL + "stand/images/Urmonov_R_S.jpg"}
              alt="Урмонов Р.С."
            />
            <div className="carousel-caption">
              <h2>Урмонов Р.С.</h2>
              <p>Сержант I степени</p>
            </div>
          </div>
          <div className="item">
            <img
              src={BACKEND_URL + "stand/images/Kamoliddinov_A_U.jpg"}
              alt="Камолиддинов А.У."
            />
            <div className="carousel-caption">
              <h3>Камолиддинов А.У.</h3>
              <p>Сержант II степени</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Menu2;
