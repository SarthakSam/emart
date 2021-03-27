import './Nav.css';

export function Nav() {
    return (
        <nav className = "nav nav--custom">
            <a href="./index.html" className="nav__title"> E Commerce </a>
            <input type="checkbox" id="nav--custom__toggler" className="nav__toggler" />
            <label htmlFor="nav--custom__toggler" className="nav__toggler--button">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </label>
            <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="./components.html" className="nav__link">CATEGORIES</a>
                        </li>
                    </ul>
    
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="./docs.html" className="nav__link">CART</a>
                        </li>
                        <li className="nav__item">
                            <a href="./docs.html" className="nav__link">WISHLIST</a>
                        </li>

                    </ul>
                    
                </div>
        </nav>
    );
}