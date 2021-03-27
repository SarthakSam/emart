import { useStore } from "./Store";

import { AddToCart, RemoveFromWishList } from './actions';

export function WishList() {
    const { state: { wishlist }, dispatch } = useStore(); 

    const addProductToCart = (item) => dispatch( new AddToCart(item) );

    const removeFromWishList = (item) => dispatch( new RemoveFromWishList(item) );

    return (
        <ul className ="row">
            {
                wishlist.map( product => (
                    <li key = { product.id } className = 'col-3 card'>
                        <div className="card__image"></div>
                        <div className="card__body">
                            <p className="card__meta text-yellow">{ product.companyName }</p>
                            <p className="card__title">{ product.name }</p>
                            <p className="card__meta">{ product.price }</p>
                        </div>
                        <div className="card__footer">
                        <button className = "btn btn--primary"  onClick = { () => { addProductToCart(product) } }>Add To Cart</button>
                        <button onClick = { () => { removeFromWishList(product) } }>Remove from Wish List</button>
                        </div>
                    </li>
                ))

            }
        </ul>
    )

}