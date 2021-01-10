import React from 'react';
import Support from '../../assets/support.png';
import Protection from '../../assets/protection.png';
import EasyReturn from '../../assets/easyreturn.png';
import './Footer.css';
import Divider from '../Divider/Divider';
import WHatsapp from '../../assets/whatsapp.png';
import Cube from '../../assets/cube.png';
const Footer = () => {
	return (
		<div className="footer">
			<div className="addtional-features">
				<div class="feature-holder">
					<div>
						<img src={EasyReturn} alt="easy-return" />
					</div>
					<div>Free Delivery</div>
					<div className="return-policy-note">(above &#x20b9;500)</div>
				</div>
				<div class="feature-holder">
					<div>
						<img src={Protection} alt="protection" />
					</div>
					<div>Buyer Protection </div>
				</div>
				<div class="feature-holder">
					<div>
						<img src={Support} alt="support" />
					</div>
					<div>Customer Support</div>
				</div>
			</div>
			<Divider opacity={0.1} backgroundColor={'#FFFFFF'} />
			<div className="store-details">
				<div className="store-details-heading">Store Details</div>
				<div className="store-name">Mano Super Market</div>
				<div>Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka</div>
			</div>
			<div className="chat-section">
				<div className="whatsapp-chat-holder">
					<div className="whatsapp-chat">
						<div>
							<img src={WHatsapp} alt={'whatsapp'} />
						</div>
						<div>Chat With Us</div>
					</div>
				</div>
				<div className="cube">
					<img src={Cube} alt="cube" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
