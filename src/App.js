import React, { Component } from 'react';
import Sun from './sun.gif';
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
         <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Colab</a>
  <a href="#">Contact</a>
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
</div>
        <p>My detailed portfolio of Machine Learning Notebook and more.</p>
     
<iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/c871ea8e-b785-4002-a948-6192220f5935">
</iframe>

      </div>
    );
  }
}

export default App;
