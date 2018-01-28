import React, { Component } from 'react';


class BusinessCard extends Component {
  render() {
    return(
        <div className="businessCard">
          <div className="businessCard__logo">
            <img src="#"/>
          </div>
          <div className="businessCard__details">
            <div className="businessCard__promo__container">
              <div className="businessCard__promo__alert">10% off any rental</div>
              <div className="businessCard__promo__code">
                <p>Use promo code: string interpolation?</p> 
              </div>
              <div className="businessCard__features">
                <p>Free unlimited Mileage: this will prob
                  be a ul where we map through the array of features
                  and hten add in checkmark pseudoelement
                </p>
              </div>
              <div className="businessCard__view-profile">
                <a href="#" target="_blank"> View Profile </a>
              </div>
              <div className="businessCard__cta">
                <button type="button">Hire Labor</button> 
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default BusinessCard;