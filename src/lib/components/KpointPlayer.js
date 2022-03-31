import React, { forwardRef, useImperativeHandle } from "react";
const KpointPlayer = forwardRef((props, ref) => {
  var script = document.getElementById("videofront-vega");
  if (script != null) {
    document.body.removeChild(script);
  }
  script = document.createElement("script");
  script.src = "https://assets.kpoint.com/orca/media/embed/player-silk.js";
  script.id = "videofront-vega";
  script.async = true;
  document.body.appendChild(script);

  var kPlayer = null;
  useImperativeHandle(ref, () => ({
    getId() {
      return kPlayer.id;
    },
    getInfo() {
      return kPlayer.info;
    },
    playVideo() {
      if (kPlayer.getPlayState() === kPlayer.playStates.UNSTARTED) {
        kPlayer.startVideo();
      } else {
        kPlayer.playVideo();
      }
    },
    pauseVideo() {
      kPlayer.pauseVideo();
    },
    replayVideo() {
      if (kPlayer.getPlayState() === kPlayer.playStates.ENDED) {
        kPlayer.replayVideo();
      }
    },
    getCurrentTime() {
      return kPlayer.getCurrentTime();
    },
    getDuration() {
      return kPlayer.getDuration();
    },
    getVolume() {
      return kPlayer.getVolume();
    },
    seekTo(ms) {
      kPlayer.seekTo(ms);
    },
    setVolume(vlevel) {
      if (vlevel >= 0 && vlevel <= 1) {
        kPlayer.setVolume(vlevel);
      }
    },
  }));
  window.onkPointPlayerReady = function (player) {
    kPlayer = player;
    if (props.onTimeupdate) {
      player.addEventListener(player.events.timeUpdate, props.onTimeupdate);
    }
    if (props.onStateChange) {
      player.addEventListener(player.events.onStateChange, props.onStateChange);
    }
    if (props.onError) {
      player.addEventListener(player.events.onError, props.onError);
    }
    if (props.onload) {
      player.addEventListener(player.events.loaded, props.onload);
    }
  };

  const playerStyle = {
    width: props.width,
    height: props.height,
  };
  return (
    <div
      data-video-host={props.domain}
      data-kvideo-id={props.videoId}
      style={playerStyle}
      data-video-params={JSON.stringify(props.playerParams)}
      data-widgets-config={JSON.stringify(props.widgetsConfig)}
      data-player={props.playerId}
    />
  );
});
export default KpointPlayer;
