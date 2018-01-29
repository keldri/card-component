import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return(
		<div className="custom-input custom-input--checkbox">
		  <input type="checkbox" name={this.props.feature} id={this.props.feature} value={this.props.feature} onChange={this.props.handleCheck}/>
		  <label htmlFor={this.props.feature}>{this.props.feature}</label>
		</div>
    );
  }
}

export default Checkbox;