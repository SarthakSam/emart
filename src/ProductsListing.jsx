import { useStore } from './Store';
import { AddToCart, AddToWishList } from './actions';

export function ProductListing() {
    const { state: { products }, dispatch } = useStore();

    const addProductToCart = (item) => dispatch( new AddToCart(item) );

    const moveToWishList = (item) => dispatch( new AddToWishList(item) );

    return (
        <div>
            <ul className = "row">
                {
                    products.map( product => (
                    <li key = { product.id } className = 'col-3 card'>
                        <div className="card__image"></div>
                        <div className="card__body">
                            <p className="card__meta text-yellow">{ product.companyName }</p>
                            <p className="card__title">{ product.name }</p>
                            <p className="card__meta">{ product.price }</p>
                        </div>
                        <div className="card__footer">
                        <button className = "btn btn--primary"  onClick = { () => { addProductToCart(product) } }>Add To Cart</button>
                        <button onClick = { () => { moveToWishList(product) } }>Move To Wish List</button>
                        </div>
                    </li>
                    ) )
                }
            </ul>
        </div>
    );
}