import styles from './Nav.module.css';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Nav(x) {


    return (
        <nav className = "nav">
            <span className={`nav__title ${ styles.nav__title }`}>
                {/* <img src="logo.jpg" alt=""/>     */}
                Buyit
            </span>
            <div className="nav__content">
                <ul className={"nav__list " + styles.search__input__container}>
                    <li className={"input input--icon " + styles.search__input}>
                        <input type="search" placeholder="search"/>
                        <FaSearch />
                    </li>
                </ul>
                <ul className="nav__list">
                    <Link className={`nav__item ${styles.nav__link}`} to="/wishlist">
                        <FaHeart />
                        Wishlist
                        </Link>
                    <Link  className={`nav__item ${styles.nav__link}`} to="/cart">
                        <FaShoppingCart />
                        Cart
                    </Link>
                </ul>
            </div>
        </nav>
    )
}