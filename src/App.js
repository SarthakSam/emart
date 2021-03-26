import './App.css';
import { ProductListing } from './ProductsListing.jsx';
import { Cart } from './Cart.jsx';
import { Nav } from './Nav.jsx';
import { WishList } from './WishList';

function App() {
  return (
    <div>
        <Nav />
        <ProductListing />     
        <Cart />   
        <WishList />
    </div>
  );
}

export default App;
