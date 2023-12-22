import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import './AuthPage.css'; 

const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <div className="auth-container">
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            <input id="username" placeholder="user name" onChange={e => setUserName(e.target.value)}></input><br />
            <input id="password" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input><br />
            <button onClick={login}>Log in</button>
            <p>Not Registered? <Link to="/signup">Sign Up!</Link></p>
        </div>
    );
};

export default LoginPage;