
import { useStore } from '../../../contexts/store.context';
import { HorizontalProductCard } from '../horizontal-product-card/HorizontalProductCard';
import styles from './Cart.module.css';

export function Cart() {
    const { state: {cart} } = useStore();
    return (
        <ul className={ `row ${styles.cart}`}>
            {
                cart && cart.map( product => <li className={`col-6 col-sm-12`} key={product.id}>
                        <HorizontalProductCard product={product} />
                    </li>)
            }
        </ul>
    )
}