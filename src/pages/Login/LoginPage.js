import LoginForm from '../../components/LoginForm';
import authStore from '../../stores/authStore';

export default function LoginPage() {
  const store = authStore();

  const handleLogout = (e) => {
    e.preventDefault();
    
    store.logout();
  };

  if (store.loggedIn) return <button onClick={handleLogout}>Logga ut</button>;

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
