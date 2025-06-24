import { useState } from 'react';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy validation
    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    alert('Signup successful! 🚀 (This is a demo)');
  };

  return (
    <div className="signup-container">
      <h2>Create your account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit">Signup</button>
        <p>or</p>
        <button className="google-btn" type="button">Signup with Google</button>
      </form>
    </div>
  );
};

export default Signup;
