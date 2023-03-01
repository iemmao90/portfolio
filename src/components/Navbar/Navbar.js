import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './Navbar.styled.css';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(null);

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
      type: 'fa-search',
      link: '/',
    },
    {
      id: 5,
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
            <Link to={icon.link}>
              <div
                className="nav-tabs"
                key={icon.id}
                onClick={() => setSelectedTab(icon.id)}
                style={
                  selectedTab === icon.id
                    ? { backgroundColor: 'blue' }
                    : { backgroundColor: '#ffffffb3' }
                }
              >
                <FontAwesomeIcon icon={icon.type} className="rotate" />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
