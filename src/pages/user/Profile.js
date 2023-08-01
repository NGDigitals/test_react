import React from 'react';
import { useMatch, useParams } from 'react-router-dom';

const Profile = () => {
    // const {id} = useParams();
    const params = useParams();
    const match = useMatch('user/profile/:id/:name');
    // const { url, pathname } = useMatch();

    return (
        <div className="App">
            <h1>Welcome, your ID is {params.id}</h1>
            <h1>ID: {match.params.id}</h1>
            <h1>Name: {match.params.name}</h1>
        </div>
    );
}

export default Profile;