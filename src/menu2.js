import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import "./menu1.css";


function Menu2() {
    const [show, setShow] = React.useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <div className="photos-videos">
                <div className="photos">

                    <div className="photos__body"><img onClick={handleShow} src="http://localhost/stand/images/happy1.jpg" className="rounded" width="30%"/></div>
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
                            <img src="http://localhost/stand/images/Urmonov_R_S.jpg"
                                 alt="Урмонов Р.С." />
                            <div className="carousel-caption">
                                <h2>Урмонов Р.С.</h2>
                                <p>Сержант I степени</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="http://localhost/stand/images/Kamoliddinov_A_U.jpg"
                                 alt="Камолиддинов А.У." />
                            <div className="carousel-caption">
                                <h3>Камолиддинов А.У.</h3>
                                <p>Сержант II степени</p>
                            </div>
                        </div>

                    </Carousel>
                </Modal.Body>

            </Modal>


        </div>
    );
}

export default Menu2;