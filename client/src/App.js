import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListPage from './containers/ListPage';


const App = props => ({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to your to do list!</h2>
        </div>
        <ListPage store={props.store} />
        {props.children}
      </div>
    );
  }
});

export default App;
