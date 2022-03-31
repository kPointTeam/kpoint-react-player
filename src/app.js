import React, { useRef } from "react";
import KpointPlayer from "./lib/components/KpointPlayer";

function App() {
  function onTimeupdate(timeMs) {
    console.log("Time update, new time: " + parseFloat(timeMs).toFixed(2));
  }

  function onStateChange(evt) {
    console.log("onStateChange: " + evt.data);
    console.log(evt);
    console.log(playerRef);
  }
  function onError(evt) {
    console.log("onError: " + evt.data);
    console.log(evt);
  }
  function onStart() {
    console.log("Video started");
  }
  function onload() {
    console.log("Video loaded");
  }
  function onPause() {
    console.log("Video paused");
  }
  const playerRef = useRef();
  return (
    <>
      <KpointPlayer
        ref={playerRef}
        domain="ktpl.kpoint.com"
        videoId="gcc-d9e8dbc3-5dfa-4f68-bf7a-97f25fb7632c"
        height="360px"
        width="640px"
        playerParams={{ search: "false", toc: "false" }}
        onStateChange={onStateChange}
        onTimeupdate={onTimeupdate}
        onload={onload}
        onPause={onPause}
        onError={onError}
      />
    </>
  );
}
export default App;
