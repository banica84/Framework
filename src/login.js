import React, {useState} from 'react';
import './stile.css';
import {useNavigate} from 'react-router-dom';

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
        <div className='login-container'>
            <div className={"form"}>

                <div className='intro'>
                    <h1>RUMI DISCOVERY</h1>
                    <h2>Login</h2>
                    <br/>
                    <hr/>
                </div>

                <form className='login' onSubmit={iscrizione}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"example@gmail.com"}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={"*********"}
                        required
                    />
                    <button className='bottone' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
