import React from 'react';
import '../assets/Product.css'; // Assure-toi d'importer le fichier CSS si tu en as un
import productImg from '../assets/icone.webp'; // Importe l'image du produit
import useCartStore from "../state/cartStore";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const addToCart = useCartStore(state => state.addToCart);
    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} a été ajouté au panier !`); // Optionnel : notification de confirmation
    };

    return (
        <div className="product-card">
            <img src={productImg} alt={product.name} className="product-image"/>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price.toFixed(2)} €</p>
            <p className="product-gender">{product.gender}</p>
            <p className="product-description">{product.description}</p>
            <Link to={`/product/${product.id}`} className="view-details">Voir Détails</Link> <br/><br/>
            <button className="add-to-cart" onClick={handleAddToCart}>Ajouter au panier</button>
        </div>
    );
};

export default ProductCard;
