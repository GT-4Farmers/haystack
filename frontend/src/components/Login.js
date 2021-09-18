import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    const toggleShow = () => {
        setHidden(!hidden)
    }

    const login = () => {
        Axios.get('http://localhost:3001/login', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response);
            if (!response.data.success) {
                alert(response.data.msg);
            }
        })
    };

    return (
        <div className = "App">
            <div className = "registration">
                <h1>Login</h1>
                <label>Email</label>
                <input
                    type="text"
                    onChange={(e) => {
                        if (e.target.value === '') {
                            return;
                        } else {
                            setEmail(e.target.value);
                        }
                    }}
                />
                <label>Password</label>
                <input
                    type={hidden ? "password" : "text"}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            return;
                        } else {
                            setPassword(e.target.value);
                        }
                    }}
                />
                <button onClick={toggleShow}> Show/Hide </button>
                <button onClick={login}>Login!</button>
            </div>
        </div>
    )
}

export default Login
