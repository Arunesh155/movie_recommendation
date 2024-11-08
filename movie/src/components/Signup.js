import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                email,
                username,
                mobile,
                password,
            });

            if (response.status === 201) {
                onSignUp();
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Sign-up failed');
            console.error(err);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignUp} className="signup-form">
                <h2 className="signup-title">Sign Up</h2>

                {error && <p className="signup-error">{error}</p>}

                <div className="signup-input-container">
                    <label className="signup-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="signup-input"
                    />
                </div>

                <div className="signup-input-container">
                    <label className="signup-label">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="signup-input"
                    />
                </div>

                <div className="signup-input-container">
                    <label className="signup-label">Mobile Number</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                        className="signup-input"
                    />
                </div>

                <div className="signup-input-container">
                    <label className="signup-label">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="signup-input"
                    />
                </div>

                <div className="signup-input-container">
                    <label className="signup-label">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="signup-input"
                    />
                </div>

                <button type="submit" className="signup-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
