import React, { Component } from 'react';
import Sun from './sun.gif';
import TheHeights from './TheHeights.mp3';
import './App.css';



 
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <div className="Header">
      <img className="Logo" src={Sun} alt="Logo"/>
      <h1>Garrett Johnson</h1>
      <h2>Profolio</h2>
  
</div>
        <p>My detailed portfolio of Machine Learning Notebook and more.</p>
  <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/c871ea8e-b785-4002-a948-6192220f5935">
</iframe>
<div className="Audio">
   <audio controls>
  <source src={TheHeights} type="audio/mpeg">
  <source src={TheHeights} type="audio/mpeg">
</audio>
</div>
      </div>
    );
  }
}

export default App;
