import React, { Component } from 'react';
import { logo } from './sun.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img className="Logo" src={logo} alt="Logo"/>
      <div className="Header">
      <h1>Garrett Johnson</h1>
      <h2>Profolio</h2>
  </div>
      <div className="Sidescroll">
      <div className="row">
      <p>My detailed portfolio of Machine Learning Notebook and more.</p>
      </div>
      
      </div>
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
