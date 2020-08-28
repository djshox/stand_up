import React, { useState } from 'react';
import ReactPlayer from 'react-player'

function Player({show,url,onEndedd,loop}) {

    const [videoFilePath, setVideoFileURL] = useState(null);
    const handleVideoUpload = (event) => {setVideoFileURL(URL.createObjectURL(event.target.files[0]));};

    return (
        <div className="App">
            <input type="file" onChange={handleVideoUpload} />

            <ReactPlayer
                className='react-player fixed-bottom'
                playing={show}
                url= {url}
                width='100%'
                height='100%'
                controls = {true}
                onEnded={onEndedd}
                loop={loop}

            />
        </div>
    );
}

export default Player;
