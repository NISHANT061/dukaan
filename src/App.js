import './App.css';
import MainLogo from './assets/main-logo.png';
import BestSellers from './Components/BestSellers/BestSellers';
import Divider from './Components/Divider/Divider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import ProductList from './Components/ProductList/ProductList';
import Search from './Components/Search/Search';
import SeeAllProduct from './Components/SeeAllProduct/SeeAllProduct';
import Shopkeeper from './Components/ShopkeeperCard/Shopkeeper';

function App() {
	return (
		<div className="App">
			<header>
			<Header/>
			</header>
			<main>
				<Shopkeeper />
				<Search />
				<Divider />
				<BestSellers />
				<ProductList />
				<SeeAllProduct />
			</main>
			<footer>
				<Footer />
			</footer>
			<navigation>
				<Navigation />
			</navigation>
		</div>
	);
}

export default App;
