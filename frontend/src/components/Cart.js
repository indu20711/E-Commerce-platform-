import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const checkout = () => {
    if (cartItems.length === 0) return alert('Cart is empty');
    alert('Checkout successful! Cart cleared.');
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item._id} style={{ margin: '10px 0' }}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <button onClick={checkout}>Checkout</button>
        </>
      )}
      <a href="/">Back to Home</a>
    </div>
  );
};

export default Cart;
