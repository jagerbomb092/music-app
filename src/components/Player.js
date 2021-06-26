import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
export default function Player({
  setSongInfo,
  setIsPlaying,
  isPlaying,
  audioRef,
  songInfo,
  songs,
  currentSong,
  setCurrentSong,
  setSongs,
}) {
  const active =( nextPrev)=>{
    let newSongs = songs.map((item) => {
      if (nextPrev.id === item.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  function getUpdateTime(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  }
  async function skipTrackHandler(direction) {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      active(songs[(currentIndex + 1) % songs.length])
    } else {
      if ((currentIndex - 1) % songs.length < 0) {
        await setCurrentSong(songs[songs.length - 1]);
        active(songs[songs.length - 1])
        if (isPlaying) {
          audioRef.current.play()
        }
      } else {
        await  setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        active(songs[(currentIndex - 1) % songs.length])
      }
    }
    if (isPlaying) {
      audioRef.current.play()
    }
  }
  const trackAnim = {
    transform : `translateX(${songInfo.animationPercentage}%)`
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
          <input
            min={0}
            max={songInfo.durationTime || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={getUpdateTime}
          />
          <div className="animate-track" style={trackAnim} ></div>
        </div>

        <p>{songInfo.durationTime ? getTime(songInfo.durationTime) : "0:00"}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-back");
          }}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => {
            skipTrackHandler("skip-forward");
          }}
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}
