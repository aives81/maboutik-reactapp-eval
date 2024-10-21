import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productService';
import { useCart } from '../state/cartStore'; // Utilisation de useCart

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart(); // Utilisation de addToCart depuis useCart

    useEffect(() => {
        fetchProductById(id).then(setProduct);
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
        </div>
    );
};

export default ProductDetail;
