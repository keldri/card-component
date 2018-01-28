import React, { Component } from 'react';


class AddBusinessCardForm extends Component {
  render() {
    return(
      <div className='container'>
        <section className='add-item'>
          <form>
            <input type="text" name="ctaUrl" placeholder="ctaUrl?" />
            <input type="text" name="ctaText" placeholder="ctaTextg?" />
            <input type="text" name="logoUrl" placeholder="logoUrl?" />
            <input type="text" name="promoMessage" placeholder="promoMessage?" />
            <input type="text" name="promoCode" placeholder="promoCode?" />
            <input type="text" name="features" placeholder="also this is an object?" />
            <input type="text" name="name" placeholder="name?" />
            <input type="text" name="profileHref" placeholder="profileHref?" />
          <button>Add Item</button>
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