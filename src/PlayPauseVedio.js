import React, { useRef, useState } from 'react';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    if (isPlaying) {
      videoRef.current.pause(); // Pause the video
      setIsPlaying(false); // Update the state
    } else {
      videoRef.current.play(); // Play the video
      setIsPlaying(true); // Update the state
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <video
        width='250'
        ref={videoRef}
        onPlay={() => { setIsPlaying(true) }}
        onPause={() => { setIsPlaying(false) }}
        controls
      >
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
