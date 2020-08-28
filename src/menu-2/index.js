<<<<<<< HEAD
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import React from 'react';
>>>>>>> 2c18d224d4be58218b7db59f7a4706641ca99c0a
// import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";

<<<<<<< HEAD
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import ReactPlayer from 'react-player';
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";
// import "./menu2.css";
import { BACKEND_URL } from "setting.js";

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
=======
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

function Menu2() {
    const h = useHistory()


    return (
        <div className='backGround'>
            <Menu onClick={() => h.push("/")} mode="horizontal" theme="dark" >
                <Menu.Item key="mail" >
                    Home
                    </Menu.Item>
            </Menu>

            <div className="row m-0">
                <div className="col-6 offset-3">
                    <div class="neons">
                        <h4 className="text-uppercase">туғилган КУНИНГИЗ БИЛАН ТАБРИКЛАЙМИЗ!!! </h4>
                    </div>
                    <Carousel autoplay dotPosition="top" className="ml-4 pl-4">
                        <div>
                            <img style={contentStyle} src={BACKEND_URL + "stand/images/Urmonov_R_S.jpg"}
                                alt="Урмонов Р.С." />
                            <h3 className="text-center text-white font-weight-bold"> Урмоновa А.У.</h3>
                            <p className="text-center text-white mt-n2"> (Сержант II степени)</p>
                        </div>
                        <div>
                            <img style={contentStyle} src={BACKEND_URL + "stand/images/Kamoliddinov_A_U.jpg"} alt="Камолиддинов А.У." />
                            <h3 className="text-center text-white font-weight-bold"> Камолиддинов А.У.</h3>
                            <p className="text-center text-white mt-n2"> (Сержант III степени)</p>
                        </div>

                    </Carousel>
                    {/* <img src={happy} alt="a" className="happy" /> */}
                </div>

            </div>
        </div>
    );
>>>>>>> 2c18d224d4be58218b7db59f7a4706641ca99c0a
}

export default Menu2;
