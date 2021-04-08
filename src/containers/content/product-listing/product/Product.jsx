// import { FaHeart, FaRegHeart } from 'react-icons/fa';

import styles from './Product.module.css';
// import { useStore } from '../Store';
// import { Icons } from '../Icons';
// import { AddToCart, AddToWishList, RemoveFromWishList } from '../actions';


export function Product( { id, title, price, description, category, image } ) {
    // const { dispatch } = useStore();
    
    // const addProductToCart = (item) => dispatch( new AddToCart(item) );

    // const moveToWishList = (item) => dispatch( new AddToWishList(item) );

    // const removeFromWishList = (item) => dispatch( new RemoveFromWishList(item) );

    return (
        <li className = { styles.card + " card col-3 col-xl-4 col-lg-4 col-md-6 col-sm-12" }>
            
            <div className = { `card__img` }>
                <img  className={ styles.img } src={image} alt="" />
            </div>

            <div className="card__body">
                
                <p className="card__lead">Goodnites Nighttime Bedwetting Underwear, Boys' S/M (43-68 lb.), 44 Ct</p>
                <p className="card__meta">By GoodNites</p>
                <span className={ `pill bg-blue text-white ${styles.rating}` }>4.5 *</span>
               
                <p className={ styles.price }>Rs 1992</p>

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