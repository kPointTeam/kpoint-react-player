"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.json.stringify.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const KpointPlayer = props => {
  const script = document.createElement('script');
  script.src = "https://assets.zencite.com/orca/media/embed/player-silk.js";
  script.async = true;
  document.body.appendChild(script);
  const playerStyle = {
    width: props.width,
    height: props.height
  };
  const playerParams = {
    offset: props.offset,
    hide: props.hide,
    resume: props.resume
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-video-host": props.domain,
    "data-kvideo-id": props.videoId,
    style: playerStyle,
    "data-video-params": JSON.stringify(playerParams)
  });
};

var _default = KpointPlayer;
exports.default = _default;