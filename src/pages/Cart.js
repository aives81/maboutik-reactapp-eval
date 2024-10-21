import React from 'react';
import { useCart } from '../state/cartStore';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cartItems, totalPrice, removeFromCart } = useCart();

    return (
        <div className="cart">
            <h1>Votre panier</h1>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
            ))}
            <h2>Total: {totalPrice} €</h2>
        </div>
    );
};

export default Cart;
