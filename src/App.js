import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import User from './pages/user/User'
import Account from './pages/user/Account';
import Profile from './pages/user/Profile';
import Register from './pages/Register';
import {Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/*  Link components are used for linking to other views */}
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/user">Account</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        {/*  Route components are rendered if the path prop matches the current URL  */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/user/*" element={<User />} /> */}
          <Route path="user" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
          </Route>
          {/* <Route index path='/profile/:id' element={<Profile />}/> */}
          {/* <Route path='/profile/:id/:name' element={<Profile />}/> */}
          {/* <Route path="/user/profile/:id/:name" 
          element={<Profile match={useMatch("/profile/:id/:name")} />}  /> */}
        </Routes>
      </main>

      <footer>
        <h3>Copyright GoMyCode</h3>
      </footer>

    </div>
  );
}

export default App;
