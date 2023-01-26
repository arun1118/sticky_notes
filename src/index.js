import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div><App /></div>);


/* To-Do 
* change Footer
* enable a delete all notes button
* use icons instead of ADD/DELETE/EDIT keyword
* enable edit note feature
* introduce search notes feature
* enable theme switcher
 */