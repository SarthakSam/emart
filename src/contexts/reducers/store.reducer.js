import { actions } from '../../actions';

export const initialState = {
    products: [],
    cart: [],
    wishlisted: []
}

export function reducer(state, action) {
    switch( action.type ) {
        case actions.INITIALIZE_PRODUCTS:    return { ...state, products: action.payload };
        default:                             return state;
    }
}