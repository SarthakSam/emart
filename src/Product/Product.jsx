import { FaHeart, FaRegHeart } from 'react-icons/fa';

import './Product.css';
import { useStore } from '../Store';
// import { Icons } from '../Icons';
import { AddToCart, AddToWishList, RemoveFromWishList } from '../actions';


export function Product( { product = {}, isWishlisted} ) {
    const { dispatch } = useStore();
    
    const addProductToCart = (item) => dispatch( new AddToCart(item) );

    const moveToWishList = (item) => dispatch( new AddToWishList(item) );

    const removeFromWishList = (item) => dispatch( new RemoveFromWishList(item) );

    return (
        <li className = 'col-2 col-lg-3 col-md-4 col-sm-6 card'>
                <div class="card__img badge__container">
                    <img src="https://images.unsplash.com/photo-1616623653304-4e878e186568?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" />
                    {
                        isWishlisted? <FaHeart className = "product-card__icon" onClick = { () => { removeFromWishList(product) } }  /> : <FaRegHeart className = "product-card__icon" onClick = { () => { moveToWishList(product) } } />
                    }
                </div>
                <div class="card__body">
                    
                    <p class="card__title">{ product.name }</p>
                    <p class="card__meta">By lallu { product.companyName }</p>
                    
                    <p class="card__lead">Rs { product.price }</p>
                </div>
                <div className="card__footer">
                <button className = "btn btn--primary btn--fluid"  onClick = { () => { addProductToCart(product) } }>Add To Cart</button>
                </div>
        </li>
    )
}