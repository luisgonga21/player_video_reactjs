import React, { useEffect, useRef, useState } from "react";
import { Player } from "./style";
import video from "../../video/Trem Bala – Ana Vilela (Jão)-1.mp4";


function usePlayerState($videoplayer) {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
  });

  useEffect(() => {
    playerState.playing ? $videoplayer.current.play() : $videoplayer.current.pause();
  }, [
    $videoplayer,
    playerState.playing
  ]);

  function toggleVideoPlay() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    })
  }

  function handleTimeUpdate() {
    const currentPercentage = ($videoplayer.current.currentTime / $videoplayer.current.duration) * 100
    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    })
  }

  function handleChangeVideoPercentage(event) {
    const currentPercentageValue = event.target.value;
    $videoplayer.current.currentTime = $videoplayer.current.duration / 100 * currentPercentageValue;
    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue,
    })
  }


  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage
  }
}
const videoPlayer = video;

export default function Home() {
  const $videoplayer = useRef();
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage
  } = usePlayerState($videoplayer);

  return (
    <>
      <Player>
        <div>
          <video
          ref={$videoplayer}
          src={videoPlayer}
          onTimeUpdate={handleTimeUpdate}
          />
          <div>
            <button onClick={toggleVideoPlay} >
              {playerState.playing ? "Pause" : "Play"}
            </button>
            <input 
            type="range"
            min="0"
            max="100"
            onChange={handleChangeVideoPercentage}
            value={playerState.percentage}
          />
          </div>
        </div>
      </Player>
    </>
  );
}


