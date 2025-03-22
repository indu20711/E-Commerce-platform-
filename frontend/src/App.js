import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './components/Cart';
import Admin from './pages/Admin';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;
  try {
    const decoded = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    if (adminOnly && !decoded.isAdmin) return <Navigate to="/" />;
    return children;
  } catch (err) {
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute adminOnly><Admin /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
