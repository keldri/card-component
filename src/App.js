import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBusinessCardForm from './Components/AddBusinessCardForm';
import BusinessCard from './Components/BusinessCard';
import './styles/styles.css';



class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
            <div className='component__title'>
              <h1>Card Component</h1>
            </div>
        </header>
        <div className="component__wrapper">
          <div className='container'>
            <BusinessCard/>
            <BusinessCard/>
          </div>
        </div>
        <div className="component__form">
          <div className='container'>
            <AddBusinessCardForm/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;