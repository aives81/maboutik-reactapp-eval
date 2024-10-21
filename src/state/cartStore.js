import { create } from 'zustand';

const useCartStore = create(set => ({
    cartItems: [],
    addToCart: (product) => set(state => ({
        cartItems: [...state.cartItems, product],
    })),
    removeFromCart: (productId) => set(state => ({
        cartItems: state.cartItems.filter(item => item.id !== productId),
    })),
}));

export default useCartStore;