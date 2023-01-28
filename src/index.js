import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div><App /></div>);


/* To-Do 

* click to expand note
* tutorial note, hardcode
* introduce search notes feature
* enable theme switcher
 */