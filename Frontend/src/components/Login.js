import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onToggleSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Store token
                onLogin(); // Call onLogin callback if successful
            } else {
                setError(data.msg || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2 className="login-title">Login</h2>

                {error && <p className="login-error">{error}</p>}

                <div className="login-input-container">
                    <label className="login-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div className="login-input-container">
                    <label className="login-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div className="login-button-container">
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <button type="button" className="signup-button" onClick={onToggleSignUp}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
