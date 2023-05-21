import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import authStore from '../../stores/authStore';

import './Navbar.styled.css';

const Navbar = () => {
  const store = authStore();
  const [selectedTab, setSelectedTab] = useState(null);

  const handleLogout = (e) => {
    e.preventDefault();

    store.logout();
  };

  const icons = [
    {
      id: 1,
      name: 'Home',
      type: 'fa-house',
      link: '/',
    },
    {
      id: 2,
      name: 'Profile',
      type: 'fa-user',
      link: '/profile',
    },
    {
      id: 3,
      name: 'Code',
      type: 'fa-code',
      link: '/',
    },
    {
      id: 4,
      name: 'Items',
      type: 'fa-warehouse',
      link: '/items',
    },
    {
      id: 5,
      name: 'More',
      type: 'fa-bars',
      link: '/',
    },
  ];

  return (
    <nav className="top-nav">
      <div className="info">
        <h1>EO</h1>
      </div>
      <div className="links">
        {icons.map((icon) => {
          return (
            <div key={icon.id}>
              <Link to={icon.link} className="nav-links">
                <button
                  className="nav-tabs"
                  onClick={() => setSelectedTab(icon.id)}
                  /* style={
                    selectedTab === icon.id
                      ? { backgroundColor: 'fff' }
                      : { backgroundColor: '#ffffffb3' }
                  } */
                >
                  <FontAwesomeIcon
                    icon={icon.type}
                    className="nav-icons"
                    size="s"
                  />

                  <h2 className="link-nav">{icon.name}</h2>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="user-links">
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        {store.loggedIn ? (
          <button onClick={handleLogout}>
            <FontAwesomeIcon
              icon="fa-arrow-right-from-bracket"
              className="rotate"
            />
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
