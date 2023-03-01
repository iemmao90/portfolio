import './App.css';
import Home from './pages/Home';

import {
  faCode,
  faUser,
  faSearch,
  faHamburger,
  faBars,
  faHouse
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// import Home2 from './pages/Home2';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  library.add(faCode, faUser, faSearch, faHamburger, faBars, faHouse);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
