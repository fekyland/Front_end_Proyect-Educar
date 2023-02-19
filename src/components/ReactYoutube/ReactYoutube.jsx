import React from 'react';
import YouTube from 'react-youtube';

function ReactYoutube (props) {
  const opts = {
    height: '200',
    width: '200',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // acceso al player de YouTube
    event.target.pauseVideo();
  };

  return (
    <YouTube videoId={props.videoId} opts={opts} onReady={onReady} />
  );
}

export default ReactYoutube;
