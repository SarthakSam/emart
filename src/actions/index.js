export const actions = {
    INITIALIZE_PRODUCTS: 'INITIALIZE_PRODUCTS'
}

export class InitializeProducts {
    constructor(payload) {
        this.type = actions.INITIALIZE_PRODUCTS;
        this.payload = payload;
    }
}