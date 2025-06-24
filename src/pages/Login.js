import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedin, setUsername }) => {
  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      toast.error('Please enter both username and password');
      return;
    }

    setUsername(username); 
    setLoggedin(true);
    toast.success('Login Successful! 🎉');

    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className='login-container'>
      <h2>Login to Welcomi</h2>
      <form onSubmit={handleLogin}>
        {/* Username input */}
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsernameInput(e.target.value)}
        />

        {/* Password input with toggle */}
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setshowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <p className="forgot-password">Forgot Password?</p>

        <button type="submit">Login</button>

        <p>or</p>

        <button type="button" className="google-btn">Signup with Google</button>
      </form>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default Login;
