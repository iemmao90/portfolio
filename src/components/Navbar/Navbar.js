import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './Navbar.styled.css';
import authStore from '../../stores/authStore';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const store = authStore()

  const icons = [
    {
      id: 1,
      type: 'fa-house',
      link: '/',
    },
    {
      id: 2,
      type: 'fa-user',
      link: '/profile',
    },
    {
      id: 3,
      type: 'fa-code',
      link: '/',
    },
    {
      id: 4,
      type: 'fa-warehouse',
      link: '/items',
    },
    {
      id: 5,
      type: 'fa-arrow-right-to-bracket',
      link: '/login',
    },
    {
      id: 6,
      type: 'fa-user-plus',
      link: '/signup',
    },
    {
      id: 7,
      type: 'fa-bars',
      link: '/',
    },
  ];

  return (
    <nav className="top-nav">
      <div className="info">
        <h1>Emma Olsson</h1>
      </div>
      <div className="search">
        {icons.map((icon) => {
          return (
            <div key={icon.id}>
              <Link to={icon.link}>
                <div
                  className="nav-tabs"
                  onClick={() => setSelectedTab(icon.id)}
                  style={
                    selectedTab === icon.id
                      ? { backgroundColor: 'lightpink' }
                      : { backgroundColor: '#ffffffb3' }
                  }
                >
                  <FontAwesomeIcon icon={icon.type} className="rotate" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
