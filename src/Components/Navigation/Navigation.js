import React from 'react';
import Home from '../../assets/home.png';
import Orders from '../../assets/orders.png';
import Bag from '../../assets/bag.png';
import './Navigation.css';

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<div className="active">
					<div>
						<img src={Home} alt={'Home'} />
					</div>
					<div>Home</div>
				</div>
				<div>
					<div className="bag-holder">
					<img src={Bag} alt="Bag" />
					<div className="bag-quatity">3</div>
					</div>
				</div>
				<div>
					<img src={Orders} alt="Orders" />
				</div>
			</div>
		</>
	);
};

export default Navigation;
