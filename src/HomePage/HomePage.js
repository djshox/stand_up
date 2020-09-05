import React, { useEffect, useState } from "react";
import Player from "./../Player";
import { connect } from "react-redux"
import { BACKEND_URL } from "setting.js";
import SideComponent from './SideComponent';
import { setMenuThunk } from "./../Reducers/homeMenu"
import { setSlidersThunk } from "./../Reducers/sliderReducer"
import { getBirthDaysThunk } from "./../Reducers/birthDays"
import { Image } from "react-bootstrap"
import { ButtonGroup, Button } from 'react-bootstrap';
import { Carousel } from 'antd';

const leftSides = [
  {
    url: '/action/3',
    img: require('./../images/ramzlar.jpg'),
    text: "Давлат рамзлари",
  },
  {
    url: '/action/2',
    img: require('./../images/history.jpg'),
    text: "Аждодлар мероси",
  },
  {
    url: '/action/4',
    img: require('./../images/news.jpg'),
    text: "Янгиликлар",
  }
]
const rigthSides = [
  {
    url: '/action/5',
    img: require('./../images/centerlife.jpg'),
    text: "Марказ хаёти",
  },
  {
    url: '/action/6',
    img: require('./../images/muzey.jpg'),
    text: "Марказ музейи",
  },
  {
    url: '/action/7',
    img: require('./../images/jangovarlik.jpg'),
    text: "Жанговарлик",
  }
]

const imgStyle = {
  height: '75vh',
  objectFit: "contain",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",

};
const videoStyles = {
  maxHeight: '60vh', height: '500px', width: "100%", padding: '5px'
}

let Hour = new Date().getHours();
// let Minute = new Date().getMinutes();
const HomePage = ({ setSlidersThunk, getBirthDaysThunk, getSliders, getBirthDays }) => {
  const [currentSlide, setSlide] = useState({})
  const [isVideo, setisVideo] = useState(true)
  const [gimnPlayed, setGimnPlayed] = useState(localStorage.getItem("gimnPlayed"))
  const [inc, setInc] = useState(0)


  useEffect(() => {

    if (Hour === 9) {
      localStorage.setItem("gimnPlayed", true)
      setGimnPlayed(true)
    }
    else if (Hour === 21) {
      localStorage.setItem("gimnPlayed", false)
      setGimnPlayed(false)
      // setisVideo(false)
    }
    else if (Hour === 0) {
      setSlidersThunk();
      getBirthDaysThunk();
    }

    if (!getSliders.length) {
      setSlidersThunk();
      getBirthDaysThunk();
    }
    else if (getSliders.length) {
      if (gimnPlayed) if (inc === 0) setInc(1)
      setSlide(getSliders[inc])
    }
  }, [setSlidersThunk, getBirthDaysThunk, getSliders, getBirthDays, currentSlide, inc, gimnPlayed])

  const nextSlide = () => {
    setInc((inc + 1) % getSliders.length)
  }

  const changeSlideType = e => {
    setisVideo(e)
    console.log("isVideo", isVideo);

  };
  const Videos = () => {
    return (
      <Player nextSlide={nextSlide} style={videoStyles} playing={true} url={BACKEND_URL + currentSlide.url} showControls={true} loop={true} width="100%" height='50%' />
    )
  }

  const ImgCarusel = () => {
    return (
      <Carousel autoplay style={{ marginTop: "-90px" }} dots={false}>
        {getBirthDays.map(user => {
          return (<div key={user.id} >
            <div className="neons">
              <h4 className="text-uppercase"> поздравляем с днём рождения !</h4>
            </div>
            <Image src={BACKEND_URL + user.url} style={imgStyle} />
            <h4 className="text-center text-primary">{user.name} </h4>
            <div className="text-center">{user.description}</div>
          </div >)
        })
        }
      </Carousel>
    )
  }


  return (
    <div className="container-fluid">

      <div className="row pt-4">
        <div className="col-2">
          {leftSides.map((menu, key) => <SideComponent {...menu} key={key} />)}
        </div>
        <div className="col-8" style={{ margin: '12vh 0', }}>
          {(currentSlide && currentSlide.type) ?
            isVideo ?
              <Videos />
              : <ImgCarusel />
            : null
          }
        </div>
        <div className="col-2">
          {rigthSides.map((menu, key) => <SideComponent {...menu} key={key} />)}

        </div>
      </div>
      <ButtonGroup className="position-fixed" style={{ bottom: '10px', left: "47%" }}>
        <Button onClick={() => changeSlideType(true)} variant="secondary">Video</Button>
        <Button onClick={() => changeSlideType(false)} variant="secondary">Foto</Button>
      </ButtonGroup>
    </div >
  )
}
const mapState = ({ getMenus, getSliders, getBirthDays }) => ({ getMenus, getSliders, getBirthDays })

export default connect(mapState, { setMenuThunk, setSlidersThunk, getBirthDaysThunk })(HomePage);
