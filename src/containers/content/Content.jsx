import { useEffect } from 'react';
import axios from 'axios';
// import { Routes, Route } from 'react-router-dom';

import { getProducts as getProductsURL } from '../../utils/api.config';
import styles from './Content.module.css';
import { useStore } from '../../contexts/store.context';
import { useNotifications } from '../../contexts/notifications-context';
import { InitializeProducts } from '../../actions';
import { useLoader } from '../../contexts/loader-context';

import { ProductListing } from './product-listing/ProductsListing';

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
             {/* <Routes>
                <Route path="/" element={<VideoListing />} />
                <Route path="/home" element={<VideoListing />} />
                <Route path="/uploads/new" element={ <VideoProvider>
                    <NewVideo />
                </VideoProvider>} />
                <Route path="watch/:id" element={<Watch />} />
                <Route path="playlist/:id" element={<Playlist />} />
            </Routes> */}
            
            <ProductListing />

            {/* { path === 'home' && <VideoListing />}
            { path === 'uploads/new' && 
                <VideoProvider>
                    <NewVideo />
                </VideoProvider>
             }
            { path === 'history' && <Playlist id = "history"  /> }
            { path === 'playlist' && <Playlist id = { params } /> }
            { path === 'watch' && <Watch id = { params } /> } */}
        </div>
    )
}