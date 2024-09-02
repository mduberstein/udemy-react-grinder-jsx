// 1) Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// // 4) Create a component
// Moved to the separate file App.js
// function App () { 
//   return <input placeholder="hi there"/>
// }

// 5) Show the componenet on the screen
root.render(<App />);
