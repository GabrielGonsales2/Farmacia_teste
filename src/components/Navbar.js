// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Farmácia Teste</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>Carrinho</Link>
        <Link to="/auth" style={styles.link}>Login / Registro</Link> {/* Altere para o caminho /auth */}
        
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#2196F3',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
