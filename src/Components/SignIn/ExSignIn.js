import React from 'react';

const ExSignIn = ({ user, signOutHandler, signInHandler }) => {
    return (
        <div>
            {
                user.isSignedIn ? <button onClick={signOutHandler}>Sign Out</button>
                    : <button onClick={signInHandler}>Sign In</button>
            }
            {

                console.log(user)
            }
            {
                user.isSignedIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>Your Email : {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default ExSignIn;