import { Route, Navigate } from 'react-router-dom';
import { useInventory } from './InventoryContext';

export const AdminProtectedRoute = ({ children, ...rest }) => {
  const { adminId} = useInventory();

  if (!adminId) {
    return <Navigate to="admin-login" />;
  }

  return children;
};



