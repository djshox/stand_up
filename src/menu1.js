import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-bootstrap/Modal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ReactPlayer from "react-player";
import "./menu1.css";
import Navbar from "./menu-1/navbar";
// import { BACKEND_URL } from "setting.js";

import { useHistory } from "react-router-dom";

function Menu1() {
  const [show, setShow] = React.useState(false);
  const [showV, setShowV] = React.useState(false);
  console.log(show, showV);
  const handleShow = () => setShow(true);
  const handleShowV = () => setShowV(true);
  // const handleCloseV = () => setShowV(false);

  const h = useHistory()

  return (
    <div>
      <Navbar />
      <div className="photos-videos">

        <div className="photos" onClick={() => h.push("/menu1/photos")}>
          <div className="photos__body">
            <img onClick={handleShow} src={"https://placeimg.com/200/133/nature/1"} className="rounded" width="30%" alt='1' />
          </div>
          <div className="photos__title" ><h1>Photos:</h1></div>
        </div>

        <div className="photos" onClick={() => h.push("/menu1/video")}>

          <div className="videos__body"><img onClick={handleShowV} src="https://placeimg.com/200/133/nature/2" className="rounded" width="30%" alt='q' /></div>
          <div className="videos__title" ><h1>Videos:</h1></div>
        </div>
      </div>

      {/* <Modal show={showV} onHide={handleCloseV}>
                <Modal.Body>

                    <ReactPlayer
                        className='react-player fixed-bottom'
                        playing={showV}
                        url={BACKEND_URL + 'stand/video/video-2.mp4'}
                        controls={true}

                    />
                </Modal.Body>

            </Modal> */}

      {/* <div className="photos" onClick={() => h.push("/menu1/video")}>
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
        </div> */}
    </div>

    //   <Modal show={showV} onHide={handleCloseV}>
    //     <Modal.Body>
    //       <ReactPlayer
    //         className="react-player fixed-bottom"
    //         playing={showV}
    //         url={BACKEND_URL + "stand/video/video-2.mp4"}
    //         controls={true}
    //       />
    //     </Modal.Body>
    //   </Modal>


    // </div>
  );
}

export default Menu1;
