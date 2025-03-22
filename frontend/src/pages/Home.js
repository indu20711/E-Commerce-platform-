import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products${category ? `?category=${category}` : ''}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, [category]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-commerce Store</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginBottom: '20px' }}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map(product => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href="/cart">Go to Cart</a> | <a href="/login">Login</a> | <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Home;
