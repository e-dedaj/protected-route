function Admin({ user }) {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {user.name}!</p>
      <p>You have full access.</p>
    </div>
  );
}

export default Admin;