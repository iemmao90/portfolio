import LoginForm from '../../components/LoginForm';
import authStore from '../../stores/authStore';

import './LoginPage.styled.css';

export default function LoginPage() {
  const store = authStore();

  const handleLogout = (e) => {
    e.preventDefault();

    store.logout();
  };

  if (store.loggedIn) return <button onClick={handleLogout}>Logga ut</button>;

  return (
    <section className="main-container">
      <div className="main-container-top">
        <h1>Login</h1>
        <LoginForm />
      </div>
      <div className="main-container-bottom"></div>
    </section>
  );
}
