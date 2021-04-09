import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import styles from './Product.module.css';
import { useStore } from '../../../../contexts/store.context';
import { useEffect, useState } from 'react';
import { RemoveFromWishlist, AddToWishlist } from '../../../../actions';


export function Product( { product } ) {
    const navigate = useNavigate();
    const { state: { wishlist },dispatch } = useStore();
    const [isWishlisted, setIsWishlisted] = useState(false);
    
    useEffect( () => {
        const isWishisted = !!wishlist.find( item => product.id === item.id);
        setIsWishlisted(isWishisted);
    } , [product, wishlist]);

    
    // const addProductToCart = (item) => dispatch( new AddToCart(item) );

    // const moveToWishList = (item) => dispatch( new AddToWishList(item) );

    // const removeFromWishList = (item) => dispatch( new RemoveFromWishList(item) );

    const wishlistClicked = (event) => {
        event.stopPropagation();
        if(isWishlisted) {
            dispatch( new RemoveFromWishlist(product));
        } else {
            dispatch( new AddToWishlist(product));
        }
        setIsWishlisted(val => !val);
    }

    const showProduct = () => {
        navigate(`/product/${product.id}`);
    }

    return (
        <li className = { styles.card + " card col-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"} onClick = { () => showProduct() }>
            
            <div className = { `card__img badge__container` }>
                <img  className={ styles.img } src={product.image} alt="" />
                <span className={ `badge ${ styles.wishlistIcon }` } onClick = { wishlistClicked } >
                        {
                            isWishlisted? 
                            <FaHeart style={{fill: 'inherit'}} /> :
                            <FaRegHeart style={{fill: 'inherit'}} />
                        }
                </span>
            </div>

            <div className="card__body">
                
                <p className="card__lead">{product.title}</p>
                <p className="card__meta">By GoodNites</p>
                <span className={ `pill bg-blue text-white ${styles.rating}` }>4.5 *</span>
               
                <p className={ styles.price }>Rs {product.price}</p>

            </div>
        </li>
        // <li className = 'col-2 col-lg-3 col-md-4 col-sm-6 card'>
        //         <div className="card__img badge__container">
        //             <img src={image} alt="" />
        //             {/* {
        //                 isWishlisted? <FaHeart className = "product-card__icon" onClick = { () => { removeFromWishList(product) } }  /> : <FaRegHeart className = "product-card__icon" onClick = { () => { moveToWishList(product) } } />
        //             } */}
        //         </div>
        //         <div className="card__body">
                    
        //             <p className="card__title">{ title }</p>
        //             <p className="card__meta">By lallu </p>
                    
        //             <p className="card__lead">Rs { price }</p>
        //         </div>
        //         <div className="card__footer">
        //         {/* <button className = "btn btn--primary btn--fluid"  onClick = { () => { addProductToCart(product) } }>Add To Cart</button> */}
        //         </div>
        // </li>
    )
}