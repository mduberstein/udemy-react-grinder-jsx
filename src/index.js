// 1) Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App () {
  <h4>This is an element!</h4>
  return <h1>Hi There!</h1>
}

// 5) Show the componenet on the screen
root.render(<App />);