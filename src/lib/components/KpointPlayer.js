import React from 'react';
const KpointPlayer = (props) => {
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
    }

    return (
    <div data-video-host= {props.domain}
    data-kvideo-id= {props.videoId}
    style={playerStyle}
    data-video-params={JSON.stringify(playerParams)}
    />
   )
}
export default KpointPlayer;