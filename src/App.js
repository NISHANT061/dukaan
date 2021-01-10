import './App.css';
import MainLogo from './assets/main-logo.png';
import BestSellers from './Components/BestSellers/BestSellers';
import Divider from './Components/Divider/Divider';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import ProductList from './Components/ProductList/ProductList';
import Search from './Components/Search/Search';
import SeeAllProduct from './Components/SeeAllProduct/SeeAllProduct';
import Shopkeeper from './Components/ShopkeeperCard/Shopkeeper';


function App() {
	return (
		<div className="App">
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
			<Shopkeeper/>
      <Search/>
      <Divider/>
      <BestSellers/>
      <ProductList/>
      <SeeAllProduct/>
      <Footer/>
      <Navigation/>
		</div>
	);
}

export default App;
