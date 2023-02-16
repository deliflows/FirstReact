// import React
import React from 'react';
// Interact with the DOM elements.
import ReactDOM from 'react-dom/client';
import App from './App'


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);



root.render(
    <App />
)