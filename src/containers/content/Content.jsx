import { useEffect } from 'react';
import axios from 'axios';
// import { Routes, Route } from 'react-router-dom';

import { getProducts as getProductsURL } from '../../utils/api.config';
import styles from './Content.module.css';

export function Content() {
    // const { dispatch } = useStore();
    // const { setLoading } = useLoader();
    // const { showNotification } = useNotifications();

    const getProducts = async () => {
        try {
            const resp = axios.get(getProductsURL);
            console.log(resp);
        } catch(err) {
            console.log(err);
        } finally {

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