import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout({ user, setUser }) {
  return (
    <div className="layout">
      <Navbar user={user} setUser={setUser} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;