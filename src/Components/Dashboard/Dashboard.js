import React from 'react';
import { useAuth } from '../../Contexts/AuthProvider';
import "./Dashboard.css";

const Dashboard = () => {
    const { user, logout } = useAuth();

    const logoutBtnStyle = {
        marginTop: "30px",
        padding: "7px 30px",
        fontSize: "1.1rem",
        cursor: "pointer"
    };
    return (
        <div className="dash-container">
            <div>
                {console.log("dashboard =>>> ", user)}
                <h2>Name : {user.displayName}</h2>
                <h3>Email : {user.email}</h3>

                <button onClick={logout} style={logoutBtnStyle} >LogOut</button>
            </div>
        </div>
    );
};

export default Dashboard;