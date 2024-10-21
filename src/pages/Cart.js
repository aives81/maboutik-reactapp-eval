import React from 'react';
import useCartStore from '../state/cartStore';
import CartItem from '../components/CartItem';
import productImg from '../assets/icone.webp';
import '../assets/Product.css'; // Assure-toi d'importer le fichier CSS si tu en as un


const Cart = () => {
    const cartItems = useCartStore(state => state.cartItems);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <p>
                <h2>Mon Panier</h2>
                Total de mon panier: {totalAmount.toFixed(2)} €
            </p>
            <div className="cart product-list">
                <br/>
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
                            <button className="remove-to-cart" onClick={() => removeFromCart(item.id)}>Supprimer du panier</button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Cart;
