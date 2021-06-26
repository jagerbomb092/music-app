import React from "react";
export default function LibrarySong({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs
}) {
  async function songSelect() {
    let selectedSong = songs.filter((item) => {
      return item.id === song.id;
    });
    let newSongs = songs.map((item)=>{
      if (song.id === item.id) {
        return{
          ...item,
          active:true
        }
      }
      else{
        return{
          ...item,
          active:false
        }
      }
    })
    setSongs(newSongs)
    await setCurrentSong(selectedSong[0]);
    if (isPlaying) {
      audioRef.current.play()
    }
  }
  return (
    <div onClick={songSelect} className={`library-songs ${song.active ? 'selected':''}`}>
      <img alt={song.name} src={song.cover} />
      <div className="title-control">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
