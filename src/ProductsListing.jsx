
import { useStore } from './Store';
import { Product } from './Product/Product';

export function ProductListing() {
    const { state: { products } } = useStore();

    return (
        <div>
            <ul className = "row">
                {
                    products.map( product => (
                         <Product product = { product }  />
                    ) )
                }
            </ul>
        </div>
    );
}