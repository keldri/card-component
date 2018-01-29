import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

class BusinessCardList extends Component {
  render() {
  return(
    <ul>
      {this.props.items.map((item) => {
        return (
          <li key={item.name}>
            <BusinessCard
              item={item}
            />
          </li>
        )
      })}
    </ul>
  )
}}
export default BusinessCardList;