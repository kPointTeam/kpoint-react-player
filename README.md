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
`offset` | Start offset in milliseconds to start the video from
`hide` | You can choose to hide a certain player controls based on the use case. Here is a list of supported controls which can be hidden. | `{}`
`resume` | Do not show options to resume video from last position | `false`

## Events
If you wish you access the player object to control it programatically, include a onkPointPlayerReady method in page or Javascript. This method will be called and it will be passed the player when it is created and ready to be used.

```jsx
function onkPointPlayerReady(player) {
  console.log("Got instance of a player: " + player.id);
  player.startVideo();
}
```

