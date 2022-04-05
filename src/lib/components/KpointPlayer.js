import React, { Component } from "react";

export class KpointPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kPlayer: null,
    };
    var script = document.getElementById("videofront-vega");
    if (script != null) {
      document.body.removeChild(script);
    }
    script = document.createElement("script");
    script.src =
      "https://assets.kpoint.com/orca/media/embed/videofront-vega.js";
    script.id = "videofront-vega";
    script.async = true;
    document.body.appendChild(script);
    const setKPlayer = (Player) => {
      this.setState({ kPlayer: Player });
    };
    window.onkPointPlayerReady = function (player) {
      setKPlayer(player);
      if (props.onTimeupdate) {
        player.addEventListener(player.events.timeUpdate, props.onTimeupdate);
      }
      if (props.onStateChange) {
        player.addEventListener(
          player.events.onStateChange,
          props.onStateChange
        );
      }
      if (props.onError) {
        player.addEventListener(player.events.onError, props.onError);
      }
      if (props.onStart) {
        player.addEventListener(player.events.started, props.onStart);
      }
      if (props.onload) {
        player.addEventListener(player.events.loaded, props.onload);
      }
    };
  }

  getId() {
    return this.state.kPlayer.id;
  }
  getInfo() {
    return this.state.kPlayer.info;
  }
  playVideo() {
    if (
      this.state.kPlayer.getPlayState() ===
      this.state.kPlayer.playStates.UNSTARTED
    ) {
      this.state.kPlayer.startVideo();
    } else {
      this.state.kPlayer.playVideo();
    }
  }
  pauseVideo() {
    this.state.kPlayer.pauseVideo();
  }
  replayVideo() {
    if (
      this.state.kPlayer.getPlayState() === this.state.kPlayer.playStates.ENDED
    ) {
      this.state.kPlayer.replayVideo();
    }
  }
  getCurrentTime() {
    return this.state.kPlayer.getCurrentTime();
  }
  getDuration() {
    return this.state.kPlayer.getDuration();
  }
  getVolume() {
    return this.state.kPlayer.getVolume();
  }
  seekTo(ms) {
    this.state.kPlayer.seekTo(ms);
  }
  setVolume(vlevel) {
    if (vlevel >= 0 && vlevel <= 1) {
      this.state.kPlayer.setVolume(vlevel);
    } else {
      alert("Volume level should be between 0 and 1");
    }
  }
  playerStyle = {
    width: this.props.width,
    height: this.props.height,
  };

  render() {
    return (
      <div
        data-video-host={this.props.domain}
        data-kvideo-id={this.props.videoId}
        style={this.playerStyle}
        data-video-params={JSON.stringify(this.props.playerParams)}
        data-widgets-config={JSON.stringify(this.props.widgetsConfig)}
        data-player={this.props.playerId}
      />
    );
  }
}

export default KpointPlayer;
