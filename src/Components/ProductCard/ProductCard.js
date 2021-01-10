import React from 'react';
import Divider from '../Divider/Divider';
import './ProductCard.css';

const ProductCard = (props) => {
	return (
		<>
			<div className="product-card">
				<div className="product-image-container">
					<img src={props.image} alt="product-png" />
					{props.discount ? <div className="discount-badge">{props.discount.percent}% OFF</div> : null}
				</div>
				<div className="product-card-body">
					<div className="product-card-header">
						<div className="product-name">Ice Cream Bowl</div>
						<div className="product-unit">{props.unit} unit</div>
					</div>
					<div className="product-card-footer">
						<div className="price">
							&#x20b9;{props.sp}{' '}
							{props.discount ? (
								<span style={{ color: '#808080', textDecoration: 'line-through' }}>
									&#x20b9;{props.discount.mrp}
								</span>
							) : null}
						</div>
						<button className="add-to-cart-button"> ADD +</button>
					</div>
				</div>
			</div>
			<Divider/>
		</>
	);
};

export default ProductCard;
