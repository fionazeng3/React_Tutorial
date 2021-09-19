// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom'; // finding the react folder inside the node_module directory

// Create React component
const App =  () => {
    const buttonText = 'Click on Me!';
    const labelName = "Enter name:";
    return (
    <div>
    <label className="label" htmlFor="name"> 
    {labelName}
     </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText} 
    </button>
  </div>
    );
};

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // find the div with id of root in index.html
)