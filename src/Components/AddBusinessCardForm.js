import React, { Component } from 'react';


class AddBusinessCardForm extends Component {
  render() {
    return(
      <div className='container'>
        <div className='component__title'>
          <h1>Add Card</h1>
        </div>
        <section className='add-item'>
          <form>
          <fieldset>
            <field>
              <label for="ctaUrl">Add CTA URL</label>
              <input type="text" name="ctaUrl" id="ctaUrl"/>
            </field>
            <field>
              <label for="ctaText">Add CTA Text</label>
              <input type="text" name="ctaText" id="ctaText"/>
            </field>
            <field>
              <label for="logoUrl">Add Logo URL</label>
              <input type="text" name="logoUrl" id="logoUrl"/>
            </field>
            <field>
              <label for="promoMessage">Add Promo Message</label>
              <input type="text" name="promoMessage" id="promoMessage"/>
            </field>
            <field>
              <label for="promoCode">Add Promo Code</label>
              <input type="text" name="promoCode" id="promoCode"/>
            </field>
            <field>
              <label for="features">Add Features</label>
              <input type="text" name="features" id="features"/>
            </field>
            <field>
              <label for="name">Add Company Name</label>
              <input type="text" name="name" id="name"/>
            </field>
            <field>
              <label for="name">Add Company Profile URL</label>
              <input type="text" name="name" id="name"/>
            </field>
            </fieldset>
            <button className="button--primary">Add Busines Card</button>
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