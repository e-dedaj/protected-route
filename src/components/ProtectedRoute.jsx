import { Navigate, Link } from 'react-router-dom';

function ProtectedRoute({ user, adminOnly = false, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    return (
      <div className="card">
        <h1>Access Denied</h1>
        <p>You don't have permission to access this page.</p>
        <p>Your role: {user.role}</p>
        <Link to="/"><button>Go back to Home</button></Link>
      </div>
    );
  }
  return children;
}

export default ProtectedRoute;