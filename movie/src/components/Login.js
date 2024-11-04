import React, { useState } from 'react';

const Login = ({ onLogin, onToggleSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        onLogin();  
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#081b29',
                color: '#fff',
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    backgroundColor: '#111',
                    padding: '40px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                    width: '300px',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: '#222',
                            color: '#fff',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: '#222',
                            color: '#fff',
                        }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        type="submit"
                        style={{
                            width: '45%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        style={{
                            width: '45%',
                            padding: '10px',
                            backgroundColor: '#28a745',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s',
                        }}
                        onClick={onToggleSignUp}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
