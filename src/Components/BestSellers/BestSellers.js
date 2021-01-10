import React from 'react';
import Swiper1 from '../../assets/swiper-1.png';
import Swiper2 from '../../assets/swiper-2.png';
import Swiper3 from '../../assets/swiper-3.png';
import './BestSellers.css';
const BestSellers = () => {
	return (
		<div className="best-sellers">
			<div className="best-sellers-heading">Best Sellers</div>
			<div className="best-sellers-detail">
				<div className="best-seller-product">
					<img src={Swiper1} alt="Check" />
					<div className="overlay">
						<div>Ice creams</div>
					</div>
				</div>
				<div className="best-seller-product">
					<img src={Swiper2} alt="Check" />
                    <div className="overlay">
						<div>Home Food</div>
					</div>
				</div>
				<div className="best-seller-product">
					<img src={Swiper3} alt="Check" />
					<div className="overlay">
						<div>Fruit Salad</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BestSellers;
