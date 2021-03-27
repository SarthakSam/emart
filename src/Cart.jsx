import { useStore } from './Store';
import { AddToCart, RemoveProductFromCart } from './actions';

export function Cart() {
    const { state: { cart }, dispatch } = useStore();

    const addProductToCart = (item) => dispatch( new AddToCart(item) );

    const removeProductFromCart = (item) => dispatch(new RemoveProductFromCart(item) );

    return (
        <div>
            <ul>
                {
                    cart.map( product => (
                        <li key = { product.id } className = 'col-3 card'>
                        <div className="card__image"></div>
                        <div className="card__body">
                            <p className="card__meta text-yellow">{ product.companyName }</p>
                            <p className="card__title">{ product.name }</p>
                            <p className="card__meta">{ product.price }</p>
                            <p className="card__meta">{ product.quantity }</p>
                        </div>
                        <div className="card__footer">
                        <button className = "btn btn--primary btn--inverted"  onClick = { () => { addProductToCart(product) } }>+</button>
                        <button className = "btn btn--danger btn--inverted" onClick = { () => { removeProductFromCart(product) } }>-</button>
                        </div>
                    </li> 
                    ) )
                }
            </ul>
        </div>
    );

}