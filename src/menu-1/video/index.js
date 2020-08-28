import React from "react"
import ReactPlayer from 'react-player'
import Navbar from "../../navbar"

import "./index.css"

export default function Menu1Video() {
    return(
        <div className="menu1-video">
            <Navbar />
            <ReactPlayer
                className='menu1-video__player'
                playing={true}
                url= 'http://localhost/stand/video/video-2.mp4'
                width='80%'
                height='80%'
                // controls = {true}
                loop={true}

            />
        </div>
    )
}