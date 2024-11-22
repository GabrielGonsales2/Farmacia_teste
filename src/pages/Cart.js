// src/pages/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser; // Verifica se o usuário está logado
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const clearCart = () => {
    if (user) {
      dispatch({ type: "CLEAR_CART" });
      alert("Compra finalizada com sucesso!");
    } else {
      alert("Você precisa estar logado para finalizar a compra.");
      navigate('/auth'); // Redireciona para login se o usuário tentar finalizar sem estar logado
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Seu Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div style={styles.cartContainer}>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.content}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Preço: R${item.price}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2>Total: R${total}</h2>
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          style={{
            ...styles.finishButton,
            backgroundColor: user ? '#4CAF50' : '#FF5722', // Define cor condicionalmente
          }}
        >
          {user ? "Finalizar Compra" : "Login Necessário para Finalizar"}
        </button>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    maxWidth: '500px',
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    marginRight: '15px',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
  },
  finishButton: {
    marginTop: '20px',
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Cart;
