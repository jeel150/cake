// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  // Check if user has admin access (either admin role OR co-admin access)
  const hasAdminAccess = user.role === 'admin' || user.isCoAdmin;
  
  if (!token || !hasAdminAccess) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;