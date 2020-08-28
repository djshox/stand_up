import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../../navbar";

export default function Menu1Photos() {
  return (
    <div className="menu1-photos">
      <Navbar />
      <Carousel
        infiniteLoop={true}
        interval={2000}
        autoPlay
        className="menu1-photos__carusel"
      >
        <div className="item active">
          <img src="https://placeimg.com/600/400/nature/1" alt="item0" />
          <div className="carousel-caption">
            <h3>Heading 3</h3>
            <p>Slide 0 description.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://placeimg.com/600/400/nature/2" alt="item1" />
          <div className="carousel-caption">
            <h3>Heading 3</h3>
            <p>Slide 1 description.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://placeimg.com/600/400/nature/3" alt="item2" />
          <div className="carousel-caption">
            <h3>Heading 3</h3>
            <p>Slide 2 description.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://placeimg.com/600/400/nature/4" alt="item3" />
          <div className="carousel-caption">
            <h3>Heading 3</h3>
            <p>Slide 3 description.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://placeimg.com/600/400/nature/5" alt="item4" />
          <div className="carousel-caption">
            <h3>Heading 3</h3>
            <p>Slide 4 description.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://placeimg.com/600/400/nature/6" alt="item5" />
          <div className="carousel-caption">
            <h3>Heading 3</h3>
            <p>Slide 5 description.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
