import React from 'react';
import {Routes, Route, Outlet, Link, useMatch } from "react-router-dom";
// import Account from './Account';
// import Profile from './Profile';

const User = () => {
    return (
        <div>
            <h1>User</h1>
    
            <nav>
                <ul>
                    <li><Link to="account">Account</Link></li>
                    <li><Link to="profile/12/Mario">Profile</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
                {/* <Routes>
                    <Route path="/account" element={<Account />} />
                    <Route path="/profile/:id/:name" 
                        element={<Profile match={useMatch("/profile/:id/:name")} />}  />
                </Routes> */}
            </main>
        </div>
    );
};

export default User;