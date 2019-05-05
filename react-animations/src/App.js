import React from 'react';
import './App.css';
import FirstPost from './FirstPost';
import AllPosts from './AllPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstPost />
        <AllPosts />
      </header>
    </div>
  );
}

export default App;
