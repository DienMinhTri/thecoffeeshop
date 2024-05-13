import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setCartItemCount(cartItems.length + 1);
    };
    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItems.length);
    };
    return (
        <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};