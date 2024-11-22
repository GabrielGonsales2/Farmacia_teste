// src/components/ProductCard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showAlternatePrices, setShowAlternatePrices] = useState(false); // Estado para controlar a exibição dos preços alternativos

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setShowAlternatePrices(true)} // Exibe os preços alternativos
      onMouseLeave={() => setShowAlternatePrices(false)} // Oculta os preços alternativos
    >
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Preço: R${product.price}</p>
        <button onClick={addToCart}>Adicionar ao Carrinho</button>
      </div>
      <div style={{ ...styles.alternatePrices, display: showAlternatePrices ? 'block' : 'none' }}>
        <h4>Preços em outras farmácias:</h4>
        {product.alternatePrices.map((altPrice, index) => (
          <p key={index}>{altPrice.pharmacy}: R${altPrice.price}</p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Adapta-se ao tamanho disponível
    maxWidth: '500px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    boxSizing: 'border-box',
    position: 'relative', // Necessário para posicionar os preços alternativos
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    marginBottom: '10px',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
  },
  alternatePrices: {
    position: 'absolute', // Isola do fluxo normal de layout
    top: '100%', // Posiciona abaixo do card
    left: '0',
    width: '100%', // Ocupa a largura total do card
    padding: '10px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adiciona uma sombra para destaque
    zIndex: 10, // Garante que fica acima de outros elementos
    display: 'none', // Esconde o conteúdo por padrão
  },
};

export default ProductCard;
