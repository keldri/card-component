import React, { Component } from 'react';
import AddBusinessCardForm from '../Components/AddBusinessCardForm';

class Modal extends Component {
  render() {
    return( 
    	<div className={this.props.isModalOpen ? "modal--open" : "modal"}>
	    	<div className="modal__backdrop">
			    <div className="modal-inner">
				    <button onClick={this.props.modalClose} className="close">X
				    	<span> close</span>
				    </button>
				    <AddBusinessCardForm
	                 	handleChange={this.props.handleChange}
     	                handleCheck={this.props.handleCheck}
	                    handleSubmit={this.props.handleSubmit}
	                    required={this.props.required}
	                    onChange={this.props.onChange}
	                    features={this.props.features}
	                    cardFeatures={this.props.cardFeatures}
	                    checked={this.props.checked}
	               	/>
				</div>
			</div>
		</div>
	);
  }
}
export default Modal;