import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../Contexts/AuthProvider';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    // here "...rest" means every key value pair of props without children


    const { user, signedIn, setSignedIn } = useAuth();

    // rendering function
    // const renderFunction = ({ location }) => user.email ? children
    //     : <Redirect
    //         to={{
    //             pathname: '/signin',
    //             state: { from: location }
    //         }}
    //     ></Redirect>

    const renderFunction = ({ location }) => {
        if (user.email) {
            return children;
        }
        else {
            return (
                <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: location }
                    }}
                ></Redirect>
            );
        }
    }


    /* 
    if user email exist then it will return the children or else it will redirect to the login page
    --------------------------------------------------------------------
    here in redirect component to is the props which is one object with         2 key value pair

                    -----------------------------------                                
    => 1st one is path name where it will it redirect
    => 2nd one is current location / pathname means from where it is redirecting so that we can be back when the user is logged in
    
                    -----------------------------------      

    */


    return (


        // here ...rest is just spread operator
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: location }
                    }}
                ></Redirect>}

        >
            {useEffect(() => {
                setSignedIn(signedIn + 1)
                console.log("render Email => ", user.email)
                console.log("sign =>>> ", signedIn)
            }, [])}</Route>
    );
};

export default PrivateRoute;