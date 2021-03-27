import { actions } from './actions';

export function appReducer(state, action) {
    switch(action.type) {
        case actions.ADD_TO_CART:     
                                    if( checkIfProductExists(state.cart, action.payload) ) {
                                        const curProduct = state.cart.find( item => item.id === action.payload.id);
                                        return { ...state, cart: [ ...state.cart.filter( item => item.id !== action.payload.id), { ...curProduct, quantity: curProduct.quantity + 1}] };
                                    }
                                    else 
                                        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

        case actions.REMOVE_PRODUCT_FROM_CART:  
                                    const curProduct = state.cart.find( item => item.id === action.payload.id);
                                    const allProductsExceptCurrent = state.cart.filter( item => item.id !== action.payload.id );
                                    if( curProduct.quantity === 1 ) 
                                        return { ...state, cart: [ ...allProductsExceptCurrent ]};
                                    return { ...state, cart: [ ...allProductsExceptCurrent, { ...curProduct, quantity: curProduct.quantity - 1 }]}
        
        case actions.ADD_TO_WISHLIST: 
                                    if( checkIfProductExists(state.wishlist, action.payload) ) {
                                        return { ...state, wishlist: [ ...state.cart.filter( item => item.id !== action.payload.id ) ]};
                                    }
                                    return { ...state, wishlist: [ ...state.wishlist, action.payload] };
        case actions.REMOVE_FROM_WISHLIST:
                                    return { ...state, wishlist: [ ...state.cart.filter( item => item.id !== action.payload.id ) ]};
        default: return state;
    }
}

function checkIfProductExists(arr, product) {
    return arr.some(item => item.id === product.id);
}