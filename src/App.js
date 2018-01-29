import React, { Component } from 'react';
import firebase from './firebase.js';
import AddBusinessCardForm from './Components/AddBusinessCardForm';
import BusinessCardList from './Components/BusinessCardList';
import Modal from './Components/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ctaUrl: '',
      ctaText: '',
      logoUrl: '',
      promoMessage: '',
      promoCode: '',
      name: '',
      profileHref: '',
      items: [],
      features: [
        'Free unlimited mileage on one-way rentals',
        '24/7 roadside assistance',
        'Flexible reservation and cancellation policies',
        'Expert support'
      ],
      cardFeatures: [],
      checked: false,
      isModalOpen: false
    }


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
            <BusinessCardList
              businessData={this.props.businessData}
            />
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