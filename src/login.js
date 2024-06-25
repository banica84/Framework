import React, { useState } from 'react';
import './stile.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const iscrizione = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/home');
    };

    return (
        <div className='login'>
            <div >
                <h1>RUMI DISCOVERY</h1>

            </div>

            <h2>Login</h2>

            <form className='Login' onSubmit={iscrizione}>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="pass">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='Bottone' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
