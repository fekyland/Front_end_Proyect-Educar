import React from 'react';

export default function YouTubePlayer(props) {
  return (
    <div
    className="youtube-player"
    style={{ width: props.width, height: props.height }}
    dangerouslySetInnerHTML={{
      __html: `
        <iframe
          width="${props.width}"
          height="${props.height}"
          src='https://www.youtube.com/embed/${props.videoId}'
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        `,
      }}
    />
  );
}
