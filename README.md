# kpoint-react-player
A React component for embeding video in kpoint player.


### Usage
```bash
npm install kpoint-react-player
```   

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {KpointPlayer} from 'kpoint-react-player'

ReactDOM.render(
  <React.StrictMode>
    <KpointPlayer domain="ktpl.kpoint.com"
    videoId="gcc-d9e8dbc3-5dfa-4f68-bf7a-97f25fb7632c"
    height="360px"
    width="640px"
    offset="50000"
    hide="search, toc, logo"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
```


## Props

Prop | Description | Default
---- | ----------- | -------
`domain` | Host name of your kPoint server. Typically of the form acme.kpoint.com. | `""`
`vidoeId` | Id of the video to load. | `""`
`width` | Set the width of the player | `640px`
`height` | Set the height of the player | `360px`
`playerParams` | Set the player parameters | `{}`
`widgetsConfig` | Set the widgets configuration | `{}`
## Callback props

Callback props take a function that gets fired on various player events:

Prop | Description
---- | -----------
`onLoad` | Called when media is loaded and ready to play.
`onError` | Called when an error occurs whilst attempting to play media
`onStateChange` | Called when playback state updates (-1: Not started yet, 0: Playback Over, 1:	Playing, 2:	Paused, 3: Buffering, 5: Replay)
`onTimeupdate` | called when playback time updates

## Instance Methods
Use ref to call instance methods on the player. 



Method | Description
---- | -----------
`getId` | Returns the video player id
`getInfo` | Returns the video player info
`playVideo` | Plays video from current position. or if video has not started, starts video from beginning.
`pauseVideo` | Pauses video at the current position.
`replayVideo` | Replays video from the beginning.
`getCurrentTime` |Returns current video position in milliseconds.
`getDuration` | Returns the duration of the video in milliseconds.
`getVolume ` | Returns current volume level in the range 0 to 1 - 0 is considered muted and 1 as full volume.
`seekTo` | Jumps to specific point in video. Time argument in specified in milliseconds.
`setVolume` | Set volume level to specified, input should be between 0 and 1.

## Example of how to use callback props and Instance methods to control the player
```
import React, { useRef } from "react";
import { KpointPlayer } from "kpoint-react-player";

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
```
## Events
If you wish you access the player object to control it programatically, include a onkPointPlayerReady method in page or Javascript. This method will be called and it will be passed the player when it is created and ready to be used.

```jsx
function onkPointPlayerReady(player) {
  console.log("Got instance of a player: " + player.id);
  player.startVideo();
}
```

## License

React is [MIT licensed](./LICENSE).

