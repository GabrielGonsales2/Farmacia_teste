// src/components/Auth.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  // Função para alternar entre login e registro
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
  };

  // Função para lidar com login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuário logado com sucesso");
      setError('');
      navigate('/profile'); // Redireciona para a página de perfil
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Falha ao fazer login. Verifique suas credenciais.");
    }
  };

  // Função para lidar com registro
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuário registrado com sucesso");
      setError('');
      navigate('/profile'); // Redireciona para a página de perfil
    } catch (error) {
      console.error("Erro ao registrar:", error);
      setError("Erro ao registrar. Tente novamente.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isLogin ? "Login" : "Registro"}</h2>
      <form onSubmit={isLogin ? handleLogin : handleRegister} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isLogin ? "Entrar" : "Registrar"}
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <button onClick={toggleMode} style={styles.toggleButton}>
        {isLogin ? "Ainda não possui uma conta? Registre-se" : "Já tem uma conta? Faça login"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  toggleButton: {
    marginTop: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default Auth;

