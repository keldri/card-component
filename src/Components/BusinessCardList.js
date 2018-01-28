import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

class BusinessCardList extends Component {
  render() {

    return(
      <ul>
        {this.props.businessData.map((business) => {
          return <li key={business.name} className="businessCard__container">
            <BusinessCard
              business={business}
            />
          </li>
        })}
      </ul>
    )
  }
}

export default BusinessCardList;