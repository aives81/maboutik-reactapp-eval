import React from 'react';
import useCartStore from '../state/cartStore';
import CartItem from '../components/CartItem';
import productImg from '../assets/icone.webp';
import '../assets/Product.css'; // Assure-toi d'importer le fichier CSS si tu en as un


const Cart = () => {
    const cartItems = useCartStore(state => state.cartItems);

    return (
        <div className="cart product-list">
            <h2>Mon Panier</h2>
            {cartItems.length === 0 ? (
                <p>Le panier est vide.</p>
            ) : (
                cartItems.map(item => (
                    <div className="product-card">
                        <img src={productImg} alt={item.name} className="product-image"/>
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-price">{item.price.toFixed(2)} €</p>
                        <p className="product-gender">{item.gender}</p>
                        <p className="product-description">{item.description}</p>
                        <button className="remove-to-cart">Supprimer du panier</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
