// src/pages/Profile.js
import React from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/auth'); // Redireciona para a página de login após logout
  };

  return (
    <div>
      <h2>Perfil</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
