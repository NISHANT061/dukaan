import React from "react";
import Arrow from "../../assets/arrow.png";
import "./SeeAllProduct.css"

const SeeAllProduct = ()=>{
return (
    <button className="see-all-products"><div>SEE ALL PRODUCTS</div>
    <div><img src={Arrow} alt="arrow"/></div></button>
)
}

export default SeeAllProduct;