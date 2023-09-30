import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';
import User from './pages/user/User';
import Blog from './pages/blog';
import Account from './pages/user/Account';
import Profile from './pages/user/Profile';
import Register from './pages/Register';
import ProtectedRoute from './middlewares/ProtectedRoute';
import {Routes, Route, Link, useMatch } from "react-router-dom";


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
                        {/* <a href='/'>Home</a> */}
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
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
                <Route exact path="/" element={<Account />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/register" element={
                    <ProtectedRoute isLoggedIn={true} >
                        <Register />
                    </ProtectedRoute>
                } />

                {/*<Route path='user/*' >
                    <Route path='' element={
                        <ProtectedRoute isLoggedIn={true}>
                            <Account/>
                        </ProtectedRoute>    
                    } />
                    <Route path='profile/:id/:name' element={
                        <ProtectedRoute>
                            <Profile  match={useMatch("/profile/:id/:name")} />
                        </ProtectedRoute>
                    } />
                </Route> */}
                {/* <Route path="/user/*" element={
                    <ProtectedRoute isLoggedIn={true}>
                    <Route path="account" element={<Account />} />
                    <Route path="profile/:id/:name" element={<Profile 
                        match={useMatch("/profile/:id/:name")} />}  />
                    </ProtectedRoute>

                } /> */}
                {/* <Route path="/user/*" element={<User />} /> */}
                
                
                {/* <Route path="/user" element={<User />}>
                    <Route path="account" element={<Account />} />
                    <Route path="profile/:id/:name" element={<Profile/>}  />
                </Route> */}
                
                
                {/* <Route index path='/profile/:id' element={<Profile />}/> */}
                <Route path='/profile/:id/:name' element={<Profile />}/>
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