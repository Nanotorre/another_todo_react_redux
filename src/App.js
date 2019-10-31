import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Todo from './components/todo';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Another react-redux todo</h1>
        <Todo></Todo>
     
      </header>
    </div>
    </Provider>
  );
}

export default App;
