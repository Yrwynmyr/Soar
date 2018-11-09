import React, { Component } from 'react';
import Sun from './sun.gif';
import TheHeights from './TheHeights.mp3';
import Delusion from './Delusion.mp3';
import IceBurgs from './IceBurgs.mp3';
import './App.css';



 
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Audio"><h1>My Original Songs on Guitar</h1>
   <audio controls>
  <source src={TheHeights} type="audio/mp3"/>
  <source src={Delusion} type="audio/mp3"/>
  <source src={IceBurgs} type"audio/mp3"/>   
Your browser does not support the audio element.
</audio> 
</div>
     </div>
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
<a href="https://my-jams.herokuapp.com"><h1>My(Heavy-Metal)Jams click here</h1></a>
      </div>
    );
  }
}

export default App;
