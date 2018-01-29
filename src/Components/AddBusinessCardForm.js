import React, { Component } from 'react';
import Checkbox from '../Components/Checkbox';

class AddBusinessCardForm extends Component {
  render() {
    return(
      <div className='container'>
        <div className='component__title'>
          <h1>Add New Card</h1>
        </div>
        <section className='add-item'>
          <form onSubmit={this.props.handleSubmit}>
            <span className="required-message"> * Dentotes Required Field</span>
            <fieldset>
              <div className="field">
                <label htmlFor="name" className="label required">Company Name</label>
                <input type="text" name="name" id="name" onChange={this.props.handleChange} value={this.props.name} required={this.props.required} placeholder="Add Company Name"/>
              </div>
              <div className="field">
                <label htmlFor="logoUrl" className="label required">Logo URL</label>
                <input type="text" name="logoUrl" id="logoUrl" onChange={this.props.handleChange} value={this.props.logoUrl} required={this.props.required} placeholder="Add Logo URL"/>
              </div>
              <div className="field">
                <label htmlFor="profileUrl" className="label">Company Profile URL</label>
                <input type="text" name="profileUrl" id="profileUrl"  onChange={this.props.handleChange} value={this.props.profileHref} placeholder="Add Profile URL"/>
              </div>
              <div className="field">
                <label htmlFor="ctaUrl" className="label required">CTA URL</label>
                <input type="text" name="ctaUrl" id="ctaUrl" onChange={this.props.handleChange} value={this.props.ctaUrl} required={this.props.required} placeholder="Add CTA URL"/>
              </div>
              <div className="field">
                <label htmlFor="ctaText" className="label required">CTA Text</label>
                <input type="text" name="ctaText" id="ctaText" onChange={this.props.handleChange} value={this.props.ctaText} required={this.props.required} placeholder="Add CTA Text"/>
              </div>
              <div className="field">
                <label htmlFor="promoMessage" className="label">Promo Message</label>
                <input type="text" name="promoMessage" id="promoMessage" onChange={this.props.handleChange} value={this.props.promoMessage} placeholder="Add Promo Message"/>
              </div>
              <div className="field">
                <label htmlFor="promoCode" className="label">Promo Code</label>
                <input type="text" name="promoCode" id="promoCode" onChange={this.props.handleChange} value={this.props.promoCode} placeholder="Add Promo Code"/>
              </div>
            </fieldset>
            <fieldset>
              <h3> Check Relevant Features </h3>
              <ul>
               {this.props.features.map((feature, index) => {
                  return (
                    <li key={index}>
                      <Checkbox
                        feature={feature}
                        handleCheck={this.props.handleCheck}
                        checked={this.props.checked}
                      />
                    </li>
                  )
                })}
              </ul>
           </fieldset>
            <button type="submit" className="button--primary">Add Card</button>
          </form>
        </section>
        <section className='display-item'>
          <div className='wrapper'>
            <ul>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default AddBusinessCardForm;