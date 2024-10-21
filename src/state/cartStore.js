import { create } from 'zustand';

export const useCart = create(set => ({
    cartItems: [],
    totalPrice: 0,

    // Function to add a product to the cart
    addToCart: (product) =>
        set(state => ({
            cartItems: [...state.cartItems, product],
            totalPrice: state.totalPrice + product.price,
        })),

    // Function to remove a product from the cart
    removeFromCart: (id) =>
        set(state => {
            const newCartItems = state.cartItems.filter(item => item.id !== id);
            const removedItem = state.cartItems.find(item => item.id === id);
            return {
                cartItems: newCartItems,
                totalPrice: state.totalPrice - removedItem.price,
            };
        }),
}));