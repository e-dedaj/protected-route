import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    console.log('klikuar', username);
    if (!username.trim()) {
      setError('Write your username');
      return;
    }
    const role = username.trim().toLowerCase() === 'admin' ? 'admin' : 'user';
    setUser({ name: username.trim(), role });
    navigate('/dashboard');
  }

  return (
    <div className="card">
      <h1>Login</h1>
      Username:<input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
