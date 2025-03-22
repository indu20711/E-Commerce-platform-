import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', { name, price: Number(price), category }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Product added successfully!');
      setName('');
      setPrice('');
      setCategory('');
    } catch (err) {
      alert('Failed to add product: ' + (err.response?.data.msg || 'Unknown error'));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>
      <h3>Add Product</h3>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
          style={{ display: 'block', margin: '10px 0', width: '200px' }}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          style={{ display: 'block', margin: '10px 0', width: '200px' }}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
          style={{ display: 'block', margin: '10px 0', width: '200px' }}
        />
        <button type="submit">Add Product</button>
      </form>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default Admin;
