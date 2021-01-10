import React from 'react';
import MainLogo from '../../assets/main-logo.png';
import "./Header.css"

const Header = () => {
	return (
		<div className="download-banner">
			<div className="shop-with-dukkan">
				<div>Store made with &nbsp;</div>
				<div>
					<img src={MainLogo} alt="Main Logo" />
				</div>
			</div>
			<div className="download-banner">
				<div className="download-app-text">DOWNLOAD APP</div>
			</div>
		</div>
	);
};

export default Header;
