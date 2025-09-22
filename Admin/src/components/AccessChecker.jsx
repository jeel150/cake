// components/AccessChecker.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AccessChecker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      const token = localStorage.getItem('adminToken');
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      
      if (!token) return;

      try {
        // Verify token and check if user still has access
        const response = await axios.get('https://cake-1h0p.onrender.com/api/auth/verify', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        const hasAccess = response.data.user.role === 'admin' || response.data.user.isCoAdmin;
        
        if (!hasAccess) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('user');
          navigate('/login');
        }
      } catch (error) {
        console.error('Access check failed:', error);
        localStorage.removeItem('adminToken');
        localStorage.removeItem('user');
        navigate('/login');
      }
    };

    // Check access every 5 minutes
    const interval = setInterval(checkAccess, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [navigate]);

  return null;
};

export default AccessChecker;