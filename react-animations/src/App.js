import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPost from './FirstPost';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstPost />
      </header>
    </div>
  );
}

export default App;
