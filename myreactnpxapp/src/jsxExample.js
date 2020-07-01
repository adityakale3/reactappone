import React from 'react';
import ReactDOM from 'react-dom';

// With JSX
const element = <h1 className="howudoin">No......</h1>
const element1 = <h1 className="howudoin">{ 5 + 5 }</h1>
// Dynamic Content
const name = "Aditya";
const element2 = <h1 className="howudoin">Hello { name }</h1>
// Call functions
const namefun = () => {
    console.log("How u doin");
}
const element3 = <h1 className="howudoin">Hello { namefun() }</h1>



// Without JSX
//const element = React.createElement("h1", null, "No.....");
//const element = React.createElement("h1", {className : "background"}, "No.....");

ReactDOM.render(element,document.getElementById('root'));