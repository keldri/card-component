import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let businessData = [
        {
			 ctaUrl: 'https://www.updater.com',
			 ctaText: 'Rent Truck',
			 logoUrl: 'http://res.cloudinary.com/updater-staging/image/upload/c_scale,h_70/Penske.png',
			 promoMessage: '10% off any rental',
			 promoCode: 'UPDATER',
			 features: [
				 'Free unlimited mileage on one-way rentals',
				 '24/7 roadside assistance',
				 'Flexible reservation and cancellation policies',
				 'Expert support',
			 ],
			 name: 'Penske',
			 profileHref: 'https://www.pensketruckrental.com/quote/start.html'
		},
		{
			 ctaUrl: 'https://www.updater.com',
			 ctaText: 'Rent Truck',
			 logoUrl: 'http://res.cloudinary.com/updater-staging/image/upload/c_scale,h_70/Penske.png',
			 promoMessage: '10% off any rental',
			 promoCode: 'UPDATER',
			 features: [
				 'Free unlimited mileage on one-way rentals',
				 '24/7 roadside assistance',
				 'Flexible reservation and cancellation policies',
				 'Expert support',
			 ],
			 name: 'Kate',
			 profileHref: 'https://www.pensketruckrental.com/quote/start.html'
		}
 ];

ReactDOM.render(<App businessData={businessData}/>, document.getElementById('root'));
registerServiceWorker();