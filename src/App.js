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
      <h1>My Original Songs on Guitar</h1>
   <audio controls>
  <source src={TheHeights}/>
</audio>  
     <audio controls>
     <source src={Delusion}/> 
     </audio>
     <audio controls>
     <source src={IceBurgs}/>
     </audio>
      <div className="Header">
      <img className="Logo" src={Sun} alt="Logo"/>
      <h1>Garrett Johnson</h1>
      <h2>Profolio</h2>
     </div>
      <p>My detailed portfolio of Machine Learning Notebook and more.</p>
  <iframe height="430" width="350" src="https://bot.dialogflow.com/a3812734-29c0-4c9d-87f5-6b4503c57f65"></iframe><div>
<a href="https://my-jams.herokuapp.com"><h1>My(Heavy-Metal)Jams click here</h1></a>
   </div>
</div>  
  
    );
  }
}

export default App;
