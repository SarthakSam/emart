import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


import { getProducts as getProductsURL } from '../../utils/api.config';
import styles from './Content.module.css';
import { useStore } from '../../contexts/store.context';
import { useNotifications } from '../../contexts/notifications-context';
import { InitializeProducts } from '../../actions';
import { useLoader } from '../../contexts/loader-context';

import { ProductListing } from './product-listing/ProductsListing';
import { ProductDetails } from './product-details/ProductDetails';
import { Cart } from './cart/Cart';
import { Wishlist } from './wishlist/Wishlist';


export function Content() {
    const { dispatch } = useStore();
    const { setLoading } = useLoader();
    const { showErrorMessage } = useNotifications();

    const getProducts = async () => {
        setLoading(true);
        try {
            const resp = await axios.get(getProductsURL);
            dispatch( new InitializeProducts(resp.data.products) );
        } catch(err) {
            console.log(err);
            showErrorMessage(err);
        } finally {
            setLoading(false);
        }

    }
    
    useEffect( () => {
        getProducts();
      }, []);
    
   

    return (
        <div className = { styles.content }>
              <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/product/:id" element={ <ProductDetails /> } />
                <Route path="/cart" element={ <Cart /> } />
                <Route path="/wishlist" element={ <Wishlist /> } />

             {/*   <Route path="watch/:id" element={<Watch />} />
                <Route path="playlist/:id" element={<Playlist />} /> */}
            </Routes> 
        </div>
    )
}