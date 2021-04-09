import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { useStore } from '../../../contexts/store.context';
import styles from './ProductDetails.module.css';
import { useNotifications } from '../../../contexts/notifications-context';
import { AddToWishlist, RemoveFromWishlist, AddToCart } from '../../../actions';

export function ProductDetails() {
    const { id } = useParams();
    const { showErrorMessage } = useNotifications();
    const { state: { products, wishlist }, dispatch } = useStore();
    const [product, setProduct] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    
    useEffect( () => {
        const foundProduct = findItem(products, id);
        if(foundProduct) {
            setProduct(foundProduct);
            const isWishlisted = !!findItem(wishlist, id);
            setIsWishlisted(isWishlisted);
        }
        else if(products.length > 0) {
            showErrorMessage("No such Product exists.");
        }
    } , [id, products]);

    const findItem = (list, id) => {
        return list.find( item => item.id === id );
    }

    const wishlistClicked = () => {
        if(isWishlisted) {
            dispatch( new RemoveFromWishlist(product));
        } else {
            dispatch( new AddToWishlist(product));
        }
        setIsWishlisted(val => !val);
    }

    const addToCart = () => {
        dispatch( new AddToCart( product ))
    }

    return (
        <> 
            {
                product &&
            <div className = { `row` }>
                <div className={`col-6 card__img badge__container ${styles.image}`}>
                    <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
                    <span className={ `badge ${ styles.wishlistIcon }` } onClick = { wishlistClicked } >
                        {
                            isWishlisted? 
                            <FaHeart style={{fill: 'inherit'}} /> :
                            <FaRegHeart style={{fill: 'inherit'}} />
                        }
                        </span>
                </div>
                <div className="col-6">
                    <p className="card__title">{ product.title }</p>
                    <p className="card__meta"><strong>Company</strong>{product.company}</p>
                   
                    <h4 className="h4">About this item</h4>
                    <p className="card__description">{ product.description }</p>
                    <button className="btn btn--primary">Buy Now</button>
                    <button className="btn btn--inverted btn--success" onClick = { addToCart }>Add to Cart</button>

                </div>
            </div>
            }
        </>
    )
}