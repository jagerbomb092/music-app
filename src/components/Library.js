import React from "react";
import LibrarySong from "./LibrarySong";
export default function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  library
}) {
  return (
    <div className={`library ${library?'active':''}`}>
      <h2>Library</h2>
      <div className="library-song">
        {songs.map((item) => {
          return (
            <LibrarySong
              songs={songs}
              setCurrentSong={setCurrentSong}
              song={item}
              key={item.id}
              isPlaying={isPlaying}
              audioRef={audioRef}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
}
