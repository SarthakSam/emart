import './App.css';
import { ProductListing } from './ProductsListing.jsx';
import { Cart } from './Cart.jsx';
import { Nav } from './Nav.jsx';
import { WishList } from './WishList';
import { useEffect } from 'react';

function App() {

  async function post() {
    let resp = await fetch('api/products', {
      method: 'POST',
      body: JSON.stringify({
        name: 'product5'
      })
    })
  
    console.log(resp);
  }

  useEffect( () => {
     post();

      fetch('api/products').then( res => res.json()).then( res => {
        console.log(res);
      })
      .catch(err => console.error(err));

  });

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
