import React from 'react';
import DragList from './DragList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragList items={ 'Lorem ipsum dolor sit'.split(' ') } />
      </header>
    </div>
  );
}

export default App;
