// import { FaEllipsisV } from 'react-icons/fa';

// import { useStore } from '../contexts/store-context';
// import { AddToHistory } from '../actions';
import styles from './HorizontalProductCard.module.css';
import { useNavigate } from 'react-router';

export function HorizontalProductCard({ product, buttons }) {
    // const { dispatch } = useStore();
    const navigate = useNavigate();


    const openProduct = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className={ styles.product } onClick = { () => openProduct(product.id) }>
                <div className={styles.product__img} >
                    <img src={product.image} alt="" />
                </div>
                <div className={ styles.card__content }>
                    <p className={ styles.card__title }>{ product.title }</p>
                    <p className="card__meta">{ product.company }</p>
                    <p>{product.price}</p>
                    {/* <ul className={styles.watch__list}>
                        <li className={ "card__meta " + styles.watch__list__item }>{ video.views } views</li>
                        <li className={ "card__meta " + styles.watch__list__item }>{ video.uploadedDate }</li>
                    </ul> */}
                </div>
        </div>
    )
}