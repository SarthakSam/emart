import './App.css';
import { ProductListing } from './ProductsListing.jsx';
import { Cart } from './Cart.jsx';
import { Nav } from './Nav.jsx';
import { WishList } from './WishList';

function App() {
  return (
    <div>
        <Nav />
        <h1>Products</h1>
        <ProductListing />
        <h1>Cart</h1>
        <Cart />
        <h1>WishList</h1>
        <WishList />
    </div>
  );
}

export default App;
