import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, isAuthLoading }) {
  if (isAuthLoading) {
    return <p>Checking authentication...</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
