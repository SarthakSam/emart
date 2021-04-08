import { actions } from '../../actions';

export const initialState = {
    products: [],
    cart: [],
    wishlist: []
}

export function reducer(state, action) {
    switch( action.type ) {
        case actions.INITIALIZE_PRODUCTS:    return { ...state, products: action.payload };
        case actions.ADD_TO_WISHLIST:        return { ...state, wishlist: action.payload};
        case actions.REMOVE_FROM_WISHLIST:   return removeFromWishlist(state, action);
        case actions.ADD_TO_CART:            return addToCart(state, action);
        case actions.REMOVE_FROM_CART:       return removeFromCart(state, action);
        default:                             return state;
    }
}

function removeFromWishlist(state, action) {
    return { ...state, wishlist: state.wishlist.filter( product => product.id === action.payload.id ) };
}

function addToCart(state, action) {
    const product = state.cart.filter( product => product.id === action.payload.id );
    if( product ) {
        const filteredCart = state.cart.filter( product => product.id !== action.payload.id);
        return { ...state, cart: [...filteredCart, { ...product, quantity: product.quantity + 1 }]};
    } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1  }] };
    }
}

function removeFromCart(state, action) {
    const product = state.cart.filter( product => product.id === action.payload.id );
    const filteredCart = state.cart.filter( product => product.id !== action.payload.id);
    if( product.quantity == 1 ) {
        return { ...state, cart: filteredCart};
    }
    else {
        return { ...state, cart: filteredCart.push({ ...product, quantity: product.quantity - 1 })};
    }

}