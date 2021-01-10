import React from 'react';
import "./Divider.css"
const Divider = (props) => {
	return <div className="divider" style={{backgroundColor:props.backgroundColor,opacity:props.opacity}}></div>;
};
export default Divider;
