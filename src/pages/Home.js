// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);  // Lista de produtos original
  const [filteredProducts, setFilteredProducts] = useState([]);  // Lista de produtos filtrada
  const [searchTerm, setSearchTerm] = useState("");  // Termo de busca

  useEffect(() => {
    // Busca os produtos da API
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);  // Define a lista filtrada inicialmente com todos os produtos
      })
      .catch(error => console.error('Erro ao buscar produtos', error));
  }, []);

  // Função para lidar com a mudança no campo de busca
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtra os produtos com base no termo de busca
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Produtos Disponíveis</h1>
      <input
        type="text"
        placeholder="Buscar medicamentos..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      <ProductList products={filteredProducts} /> {/* Renderiza a lista filtrada */}
    </div>
  );
};

const styles = {
  searchInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
};

export default Home;
