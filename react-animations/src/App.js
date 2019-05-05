import React from 'react';
import './App.css';
import FirstPost from './FirstPost';
import AllPosts from './AllPosts';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <FirstPost />
        <AllPosts />
      </header>
    </div>
  );
}

export default App;
