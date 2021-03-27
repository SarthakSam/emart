import { useContext, createContext, useReducer } from "react";
import { appReducer } from './reducer.js';

export const StoreContext = createContext({})

export function useStore() {
    return useContext(StoreContext);
}

export function StoreProvider( { children } ) {

    const initialValue = {
        products: [
            {
                id: 1,
                name: 'Shoes',
                price: 2000
            },
            {
                id: 2,
                name: 'shirt',
                price: 2000
            },
            {
                id: 3,
                name: 'Jeans',
                price: 2000
            },
            {
                id: 4,
                name: 'Laptop',
                price: 2000
            },
            {
                id: 5,
                name: 'Shoes',
                price: 2000
            },
        ],
        wishlist: [],
        cart: []
    }

    const [state, dispatch] = useReducer(appReducer, initialValue);
    return (
        <StoreContext.Provider value = {{
            state, dispatch
        }}>
            { children }
        </StoreContext.Provider>
    )
}