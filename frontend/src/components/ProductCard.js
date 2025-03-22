import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
