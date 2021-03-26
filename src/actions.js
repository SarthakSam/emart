export const actions = {
    ADD_TO_CART: 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART: 'REMOVE_PRODUCT_FROM_CART',
    ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
    REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST'
}


export class AddToCart {
    constructor(payload) {
        this.type = actions.ADD_TO_CART;
        this.payload = payload;
    }
}

export class RemoveProductFromCart {
    constructor(payload) {
        this.type = actions.REMOVE_PRODUCT_FROM_CART;
        this.payload = payload;
    }
}

export class AddToWishList {
    constructor(payload) {
        this.type = actions.ADD_TO_WISHLIST;
        this.payload = payload;
    }
}

export class RemoveFromWishList {
    constructor(payload) {
        this.type = actions.ADD_TO_WISHLIST;
        this.payload = payload;
    }
}