import React from 'react';
import Walmart from "../../assets/walmart.png";
import Tick from "../../assets/tick-2.png";

import "./Shopkeeper.css"

const Shopkeeper = () => {
	return (
		<div className="shopkeeper-card">
			<div className="shop-image"><img src={Walmart} alt="Walmart"/></div>
			<div className="shop-details">
				<div className="shop-name">Mano Super Market</div>
				<div className="shop-trust-level">
                <div>
                <img width="20" src={Tick} alt="Check"/>
                </div>
                <div>&nbsp;TRUSTED SELLER</div>
                </div>
			</div>
		</div>
	);
};

export default Shopkeeper;
