import { useStore } from "./Store";
import { Product } from './Product/Product';

export function WishList() {
    const { state: { wishlist } } = useStore(); 

    return (
        <ul className = "row">
        {
            wishlist.map( product => (
                 <Product key = { product.id } product = { product } isWishlisted  />
            ) )
        }
        </ul>


        // <ul className ="row">
        //     {
        //         wishlist.map( product => (
        //             <li key = { product.id } className = 'col-3 card'>
        //                 <div className="card__image"></div>
        //                 <div className="card__body">
        //                     <p className="card__meta text-yellow">{ product.companyName }</p>
        //                     <p className="card__title">{ product.name }</p>
        //                     <p className="card__meta">{ product.price }</p>
        //                 </div>
        //                 <div className="card__footer">
        //                 <button className = "btn btn--primary"  onClick = { () => { addProductToCart(product) } }>Add To Cart</button>
        //                 <button onClick = { () => { removeFromWishList(product) } }>Remove from Wish List</button>
        //                 </div>
        //             </li>
        //         ))

        //     }
        // </ul>
    )

}