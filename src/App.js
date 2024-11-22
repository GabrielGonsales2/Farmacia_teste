// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Auth from './components/Auth';
import Profile from './pages/Profile';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={user ? <Navigate to="/profile" /> : <Auth />} />
            <Route path="/cart" element={<Cart />} /> {/* Carrinho acessível sem login */}
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/auth" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
