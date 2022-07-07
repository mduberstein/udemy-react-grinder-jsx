// 1) Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App () {
  const message = 'Enter Age';
  const min = 5; 
  return (
    <input 
        type="number"
        min={min}                 // variables wrap with curly braces
        max={10}                  // numbers wrap with curly braces
        list = {[1, 2 ,3]}        // arrays - wrap with curly braces
        style = {{ border: '3px solid red',
                  color: 'green',
                  width: 100}} // objects wrap with curly braces
        alt={message}
    /> );
}

// 5) Show the componenet on the screen
root.render(<App />);