import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <aside>
    <h2>Categories</h2>
    <ul>
      <li><Link to="/products?category=electronics">Electronics</Link></li>
      <li><Link to="/products?category=clothing">Clothing</Link></li>
      <li><Link to="/products?category=home">Home</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
