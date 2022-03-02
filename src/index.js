import React from 'react';
import ReactDOM from 'react-dom';
import KpointPlayer from './lib/components/KpointPlayer'

ReactDOM.render(
  <React.StrictMode>
    <KpointPlayer domain="ktpl.kpoint.com"
    videoId="gcc-d9e8dbc3-5dfa-4f68-bf7a-97f25fb7632c"
    height="360px"
    width="640px"
    offset="50000"
    hide="search, toc, logo"
    resume="true"  
    />
  </React.StrictMode>,
  document.getElementById('root')
);
