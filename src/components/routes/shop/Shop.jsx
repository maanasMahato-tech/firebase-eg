import { useContext } from 'react';
import { productsContext } from '../../context/products.context';
import ProductCard from '../../product-card/product-card';
import './shop.styles.scss';

function Shop() {
    const { products } = useContext(productsContext);
    return (
        <div>
            <h1>shop</h1>
            <div className='products-container'>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default Shop;