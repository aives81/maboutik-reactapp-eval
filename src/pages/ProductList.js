import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../assets/Product.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.error('Something went wrong');
                }
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;