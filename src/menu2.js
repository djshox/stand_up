import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import "./menu1.css";
import { BACKEND_URL } from "setting.js"

function Menu2() {
    const [show, setShow] = React.useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <div className="photos-videos">
                <div className="photos">

                    <div className="photos__body"><img onClick={handleShow} src={BACKEND_URL + "stand/images/happy1.jpg"} className="rounded" width="30%" /></div>
                    <div className="photos__title" ><h1>Photos:</h1></div>
                </div>

            </div>


            <Modal show={show} onHide={handleClose}>

                <Modal.Header>
                    <Modal.Title>Поздравляем с днём рождения!</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Carousel>

                        <div className="item active">
                            <img src={BACKEND_URL + "stand/images/Urmonov_R_S.jpg"}
                                alt="Иванов Р.С." />
                            <div className="carousel-caption">
                                <h2>Иванов Р.С.</h2>
                                <p>Катта</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={BACKEND_URL + "stand/images/Kamoliddinov_A_U.jpg"}
                                alt="Азизов А.У." />
                            <div className="carousel-caption">
                                <h3>Азизов А.У.</h3>
                                <p>Ходим </p>
                            </div>
                        </div>

                    </Carousel>
                </Modal.Body>

            </Modal>


        </div>
    );
}

export default Menu2;