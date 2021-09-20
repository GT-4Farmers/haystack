import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

function Login() {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    const toggleShow = () => {
        setHidden(!hidden)
    }

    const login = () => {
        console.log(state.email)
        console.log(state.password)

        Axios.post('http://localhost:3001/login', {
            email: state.email,
            password: state.password
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
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={state.email ? state.email : ""}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type={hidden ? "password" : "text"}
                    placeholder="Password"
                    id="password"
                    value={state.password ? state.password : ""}
                    onChange={handleChange}
                />
                <button onClick={toggleShow}> Show/Hide </button>
                <button onClick={login}>Login!</button>
            </div>
        </div>
    )
}

export default Login
