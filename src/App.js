import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import chillHop from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
function App() {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  let [songInfo, setSongInfo] = useState({
    currentTime: 0,
    durationTime: 0,
    animationPercentage: 0,
  });
  const [library, setLibrary] = useState(false);
  function timeUpdateHandler(e) {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration)*100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      durationTime: duration,
      animationPercentage: animation,
    });
  }
  async function songEndHandler(){
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play()
    }
    
  }
  return (
    <div className={`App ${library ? 'atv': ''}`}>
      <Nav library={library} setLibrary={setLibrary} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        library={library}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
