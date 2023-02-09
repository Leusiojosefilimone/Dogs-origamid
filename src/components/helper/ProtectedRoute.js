import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

function ProtectedRoute({ children }) {
  const { login } = React.useContext(UserContext);
  if (login === false) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default ProtectedRoute;
