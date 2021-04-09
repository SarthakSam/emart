
import { useStore } from '../../../contexts/store.context';
import { HorizontalProductCard } from '../horizontal-product-card/HorizontalProductCard';
import styles from './Wishlist.module.css';

export function Wishlist() {
    const { state: {wishlist} } = useStore();
    return (
        <ul className={ `row ${styles.wishlist}`}>
            {
                wishlist && wishlist.map( product => <li className={`col-6 col-sm-12`} key={product.id}>
                        <HorizontalProductCard product={product} />
                    </li>)
            }
        </ul>
    )
}