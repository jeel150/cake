// Login.jsx
import '../styles/Login.css'; 
import images from '../data/images';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { jarsImg } = images;

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const config = {
        headers: { 'Content-Type': 'application/json' }
      };

      const body = JSON.stringify({ email, password });
      const res = await axios.post('http://localhost:5000/api/auth/login', body, config);

      // Save token
      localStorage.setItem('token', res.data.token);

      // Redirect to main app
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content-wrapper">
          
          {/* Left image */}
          <div className="login-left-image">
            <img src={jarsImg} alt="Decorative jars" className="login-image-style" />
          </div>

          {/* Right form content */}
          <div className="login-right-content">
            <h2 className="login-title">LOGIN</h2>
            {error && <div className="error-message">{error}</div>}
            <form className="login-form" onSubmit={onSubmit}>
              <input 
                type="email" 
                placeholder="Email" 
                className="login-input" 
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="login-input" 
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              
              <button 
                type="submit" 
                className="login-button"
                disabled={loading}
              >
                {loading ? 'Logging In...' : 'Login'}
              </button>
            </form>
            <p className="login-login-link">
              Don't have an account? <a href="/signup">Signup</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;