import React, { Component } from 'react';


class BusinessCard extends Component {
  render() {
    return(
        <div className="businessCard">
          <div className="businessCard__logo">
            <img src={this.props.item.logoUrl} alt={this.props.item.name + "-logo"}/>
          </div>
          <div className="businessCard__details">
            <div className="businessCard__promo__container">
              <div className="businessCard__business__name">{this.props.item.name}</div>
              <div className="businessCard__promo__alert">{this.props.item.promoMessage}</div>
              <div className="businessCard__promo__code">
                {this.props.item.promoCode ? <p>Use promo code: <span>{this.props.item.promoCode}</span></p> : ''}
              </div>
              <div className="businessCard__features">
                <ul>
                 {this.props.item.cardFeatures.map((cardFeature) => {
                    return <li key={cardFeature} className="project-card__container">
                      {cardFeature}
                    </li>
                  })}
                </ul>
              </div>
              <div className="businessCard__view-profile">
                <a href={this.props.item.profileHref} target="_blank"> View Profile </a>
              </div>
              <div className="businessCard__cta">
                <a href={this.props.item.ctaUrl} className="button--primary" target="_blank">{this.props.item.ctaText}</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default BusinessCard;