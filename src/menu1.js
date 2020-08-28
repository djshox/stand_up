import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
// import Media from "react-bootstrap/Media";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
// import CardDeck from "react-bootstrap/CardDeck";
// import Container from "react-bootstrap/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from "react-player";
import "./menu1.css";
import Navbar from "./menu-1/navbar";
import { BACKEND_URL } from "setting.js";

import { useHistory } from "react-router-dom";

function Menu1() {
  const [show, setShow] = React.useState(false);
  const [showV, setShowV] = React.useState(false);
  // console.log(show);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowV = () => setShowV(true);
  const handleCloseV = () => setShowV(false);

  const h = useHistory();
  return (
    <div>
      <Navbar />
      {/*<Container>*/}
      {/*<Row>*/}
      {/*<Col xs lg="2"><h1>Photos:</h1></Col>*/}
      {/*<Col><img onClick={handleShow} src="https://placeimg.com/200/133/nature/1" className="rounded" width="30%"/></Col>*/}
      {/*</Row>*/}
      {/*<Row>*/}
      {/*<Col xs lg="2"><h1>Videos:</h1></Col>*/}
      {/*<Col><img onClick={handleShowV} src="https://placeimg.com/200/133/nature/2" className="rounded" width="30%"/></Col>*/}
      {/*</Row>*/}
      {/*</Container>*/}

      <div className="photos-videos">
        <div className="photos" onClick={() => h.push("/menu1/photos")}>
          <div className="photos__body">
            <img
              onClick={handleShow}
              src={BACKEND_URL + "https://placeimg.com/200/133/nature/1"}
              className="rounded"
              width="30%"
              alt="q"
            />
          </div>
          <div className="photos__title">
            <h1>Photos:</h1>
          </div>
        </div>

        <div className="photos" onClick={() => h.push("/menu1/video")}>
          <div className="videos__body">
            <img
              onClick={handleShowV}
              src="https://placeimg.com/200/133/nature/2"
              className="rounded"
              width="30%"
              alt="q"
            />
          </div>
          <div className="videos__title">
            <h1>Videos:</h1>
          </div>
        </div>
      </div>

      <Modal show={showV} onHide={handleCloseV}>
        <Modal.Body>
          <ReactPlayer
            className="react-player fixed-bottom"
            playing={showV}
            url={BACKEND_URL + "stand/video/video-2.mp4"}
            controls={true}
          />
        </Modal.Body>
      </Modal>

      {/*<Modal show={show} onHide={handleClose}>*/}
      {/*<Modal.Body>*/}

      {/*<Carousel>*/}

      {/*<div className="item active">*/}
      {/*<img src="https://placeimg.com/600/400/nature/1"*/}
      {/*alt="item0" />*/}
      {/*<div className="carousel-caption">*/}
      {/*<h3>Heading 3</h3>*/}
      {/*<p>Slide 0 description.</p>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="item">*/}
      {/*<img src="https://placeimg.com/600/400/nature/2"*/}
      {/*alt="item1" />*/}
      {/*<div className="carousel-caption">*/}
      {/*<h3>Heading 3</h3>*/}
      {/*<p>Slide 1 description.</p>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="item">*/}
      {/*<img src="https://placeimg.com/600/400/nature/3"*/}
      {/*alt="item2" />*/}
      {/*<div className="carousel-caption">*/}
      {/*<h3>Heading 3</h3>*/}
      {/*<p>Slide 2 description.</p>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="item"><img src="https://placeimg.com/600/400/nature/4"*/}
      {/*alt="item3" />*/}
      {/*<div className="carousel-caption">*/}
      {/*<h3>Heading 3</h3>*/}
      {/*<p>Slide 3 description.</p>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="item"><img src="https://placeimg.com/600/400/nature/5"*/}
      {/*alt="item4" />*/}
      {/*<div className="carousel-caption">*/}
      {/*<h3>Heading 3</h3>*/}
      {/*<p>Slide 4 description.</p>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="item"><img src="https://placeimg.com/600/400/nature/6"*/}
      {/*alt="item5" />*/}
      {/*<div className="carousel-caption">*/}
      {/*<h3>Heading 3</h3>*/}
      {/*<p>Slide 5 description.</p>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</Carousel>*/}
      {/*</Modal.Body>*/}

      {/*</Modal>*/}
    </div>
  );
}

export default Menu1;
