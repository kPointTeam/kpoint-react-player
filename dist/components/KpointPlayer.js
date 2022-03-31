"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.json.stringify.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const KpointPlayer = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
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
  (0, _react.useImperativeHandle)(ref, () => ({
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

    getDurantion() {
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
    }

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
    height: props.height
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-video-host": props.domain,
    "data-kvideo-id": props.videoId,
    style: playerStyle,
    "data-video-params": JSON.stringify(props.playerParams),
    "data-widgets-config": JSON.stringify(props.widgetsConfig),
    "data-player": props.playerId
  });
});
var _default = KpointPlayer;
exports.default = _default;