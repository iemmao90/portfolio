import authStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button/Button.css';
import { useState } from 'react';

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();
    // Navigate
    navigate('/items');
  };

  const togglePassword = () => {
    const password = document.getElementById('passwordInput');
    if (password.type === 'password') {
      password.type = 'text';
      setShowPassword(true);
    } else {
      password.type = 'password';
      setShowPassword(false);
    }
  };
  return (
    <form onSubmit={handleLogin} className="login-form">
      <label>Email</label>
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.email}
        type="email"
        name="email"
        placeholder="Email"
      />
      <label>Password</label>
      <div className="password-container">
        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.password}
          type="password"
          name="password"
          id="passwordInput"
          placeholder="Password"
        />
        <button>
          {showPassword ? (
            <FontAwesomeIcon
              icon="fa-eye-slash"
              size="m"
              className="show-password"
              onClick={togglePassword}
            />
          ) : (
            <FontAwesomeIcon
              icon="fa-eye"
              size="m"
              className="show-password"
              onClick={togglePassword}
            />
          )}
        </button>
      </div>
      <button type="submit" className="button-custom login-button">
        Login
      </button>
    </form>
  );
}
