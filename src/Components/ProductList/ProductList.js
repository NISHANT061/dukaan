import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import Swiper1 from '../../assets/swiper-1.png';
import Baskins from '../../assets/baskins.png';
import Kwality from '../../assets/kwality.png';
import BlackCurrant from "../../assets/black-currant.png"




const ProductList = () => {
	return (
		<div className="product-list">
			<div className="product-list-heading">
				<div>Ice Creams</div>
				<div className="product-count">10</div>
			</div>
            <ProductCard image={Swiper1} name={"Ice Cream Bowl"} unit={1} discount={{percent:"30",mrp:399}} sp={209} />
            <ProductCard image={Baskins} name={"Baskin Robbin’s Scoop Cup"} unit={1}  sp={399} />
            <ProductCard image={Kwality} name={"Ice Cream Bowl"} unit={1}  sp={249} />
            <ProductCard image={BlackCurrant} name={"Ice Cream Bowl"} unit={1}  sp={175} />
            <ProductCard image={Swiper1} name={"Ice Cream Bowl"} unit={1} discount={{percent:"30",mrp:399}} sp={209} />
            <ProductCard image={Baskins} name={"Baskin Robbin’s Scoop Cup"} unit={1}  sp={399} />
            <ProductCard image={Kwality} name={"Ice Cream Bowl"} unit={1}  sp={249} />
            <ProductCard image={BlackCurrant} name={"Ice Cream Bowl"} unit={1}  sp={175} />
            <ProductCard image={BlackCurrant} name={"Ice Cream Bowl"} unit={1}  sp={175} />
            <ProductCard image={BlackCurrant} name={"Ice Cream Bowl"} unit={1}  sp={175} />
            <ProductCard image={BlackCurrant} name={"Ice Cream Bowl"} unit={1}  sp={175} />
            <ProductCard image={BlackCurrant} name={"Ice Cream Bowl"} unit={1}  sp={175} />

            {/* <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/> */}

		</div>
	);
};
export default ProductList;
