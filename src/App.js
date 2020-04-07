import React from 'react';
import './App.css';
import './mystyle.scss';
import ControlElement from './ControlElement';

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
          <div className="titles">
            <h1 className="title">React To-Do App</h1>
            <h2 className="subtitle">Enhance Your Productivity</h2>
          </div>
          <ControlElement />
      </div>
    );
  }
}

export default App;
