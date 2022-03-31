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
  function onload() {
    console.log("Video loaded");
  }
  const playerRef = useRef();
  return (
    <>
      <button
        onClick={() => {
          console.log(playerRef.current.getDuration());
        }}
      >
        Get Video Duration
      </button>
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
        onError={onError}
      />
    </>
  );
}
export default App;
