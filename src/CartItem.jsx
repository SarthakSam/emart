import { AddToCart, RemoveProductFromCart } from './actions';
import { useStore } from './Store';

export function CartItem( { product = {} } ) {
    const { dispatch } = useStore();


    const addProductToCart = (item) => dispatch( new AddToCart(item) );

    const removeProductFromCart = (item) => dispatch(new RemoveProductFromCart(item) );

    console.log(product);
    return (
        <li class="col-5 col-xl-7 col-md-9 col-sm-12">
            <div class="card card--horizontal">
                <div class="card__img col-6 p-0 m-0">
                    <img src="https://images.unsplash.com/photo-1616623653304-4e878e186568?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" />
                </div>
                <div class="card__content">
                    <p class="card__title">{ product.name }</p>
                    <p class="card__description">{ product.description }</p>
                    <p className="card__meta">Price: { product.price }</p>
                    <p className="card__meta">Quantity: { product.quantity }</p>
                    <div className="card__footer">
                        <button className = "btn btn--primary btn--inverted"  onClick = { () => { addProductToCart(product) } }>+</button>
                        <button className = "btn btn--danger btn--inverted" onClick = { () => { removeProductFromCart(product) } }>-</button>
                    </div>
                </div>

            </div>
        </li>
    )
}