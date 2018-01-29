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

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleCheck(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.cardFeatures.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.cardFeatures.filter(i => i !== newSelection)
    } else {
      newSelectionArray = [...this.state.cardFeatures, newSelection];
    }
    this.setState({ cardFeatures: newSelectionArray });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      ctaUrl: this.state.ctaUrl,
      ctaText: this.state.ctaText,
      logoUrl: this.state.logoUrl,
      promoMessage: this.state.promoMessage,
      promoCode: this.state.promoCode,
      name: this.state.name,
      profileHref: this.state.profileHref,
      features: this.state.features,
      cardFeatures: this.state.cardFeatures,
    }
    itemsRef.push(item);
    this.setState({
      ctaUrl: '',
      ctaText: '',
      logoUrl: '',
      promoMessage: '',
      promoCode: '',
      name: '',
      profileHref: '',
      cardFeatures: []
    });

    console.log(this.state.cardFeatures)
    this.closeModal();
    e.target.reset();
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          ctaUrl: items[item].ctaUrl,
          ctaText: items[item].ctaText,
          logoUrl: items[item].logoUrl,
          promoMessage: items[item].promoMessage,
          promoCode: items[item].promoCode,
          name: items[item].name,
          profileHref: items[item].profileHref,
          cardFeatures: items[item].cardFeatures
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className='app'>
        <button className="openModal button--primary" onClick={this.openModal}>Add New Card</button>
        <header>
            <div className='component__title'>
              <h1>Card Component</h1>
            </div>
        </header>
        <div className="component__wrapper">
          <div className='container'>
            <BusinessCardList
              items={this.state.items}
              features={this.state.features}
              cardFeatures={this.state.cardFeatures}
            />
          </div>
        </div>
        <div className="component__form">
            <Modal
              isModalOpen={this.state.isModalOpen}
              modalOpen={this.closeModal}
              modalClose={this.closeModal}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCheck={this.handleCheck}
              required={true}
              features={this.state.features}
              cardFeatures={this.state.cardFeatures}
              checked={this.state.checked}
            />
        </div>
      </div>
    );
  }
}
export default App;