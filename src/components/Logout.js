import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return null;
}

export default Logout;
