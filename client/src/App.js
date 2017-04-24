import React from 'react';
import './App.css';
import ListPage from './containers/ListPage';


const App = props => ({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to your to do list!</h2>
        </div>
        {props.children}
      </div>
    );
  }
});

export default App;
