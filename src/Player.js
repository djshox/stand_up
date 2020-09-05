import React from 'react';
import ReactPlayer from 'react-player'

function Player({ showControl, url, playing, loop, width, height, style, nextSlide }) {

    return (
        <div className="App">
            <ReactPlayer
                className='react-player'
                playing={playing}
                url={url}
                width={width}
                height={height}
                onEnded={nextSlide}
                controls={true}
                stopOnUnmount={false}
                style={style}
            />
        </div>
    );
}

export default Player;
