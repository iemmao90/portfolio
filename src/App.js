import './App.css';
import Home from './pages/Home';

import {
  faCode,
  faUser,
  faUserPlus,
  faSearch,
  faHamburger,
  faBars,
  faHouse,
  faArrowRightToBracket,
  faWarehouse,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// import Home2 from './pages/Home2';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './pages/Profile';
import ItemsPage from './pages/Items/ItemsPage';
import LoginPage from './pages/Login/LoginPage';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';
import SignupPage from './pages/Signup/SignupPage';

function App() {
  library.add(
    faCode,
    faUser,
    faUserPlus,
    faSearch,
    faHamburger,
    faBars,
    faHouse,
    faArrowRightToBracket,
    faWarehouse,
    faArrowRightToBracket,
    faEye,
    faEyeSlash
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/items"
          element={
            <RequireAuth>
              <ItemsPage />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
