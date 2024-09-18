import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService';

const PrivateRoute = ({ children }) => {
  if (!authService.checkAuth()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;