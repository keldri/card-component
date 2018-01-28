import React, { Component } from 'react';


class BusinessCard extends Component {
  render() {
    return(
        <div className="businessCard">
          <div className="businessCard__logo">
            <img src={this.props.business.logoUrl}/>
          </div>
          <div className="businessCard__details">
            <div className="businessCard__promo__container">
              <div className="businessCard__business__name">{this.props.business.name}</div>
              <div className="businessCard__promo__alert">{this.props.business.promoMessage}</div>
              <div className="businessCard__promo__code">
                <p>Use promo code: <span>{this.props.business.promoCode}</span></p> 
              </div>
              <div className="businessCard__features">
                <ul>
                {this.props.business.features.map((feature) => {
                  return <li key={feature}>{feature}</li>
                  })}
                </ul>
              </div>
              <div className="businessCard__view-profile">
                <a href={this.props.business.profileHref} target="_blank"> View Profile </a>
              </div>
              <div className="businessCard__cta">
                <a href={this.props.business.ctaUrl} className="button--primary" target="_blank">{this.props.business.ctaText}</a> 
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default BusinessCard;