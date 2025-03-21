import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
      <button>Checkout (Simulated)</button>
    </div>
  );
};

export default Cart;
