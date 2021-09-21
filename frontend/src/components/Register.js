import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';
import { useHistory } from 'react-router';

function Register(props) {
    const history = useHistory();
    
    const handleHistory = () => {
        history.push("/");
    }

    const [state, setState] = useState({
        firstNameReg: null,
        lastNameReg: null,
        emailReg: null,
        passwordReg: "",
        confirmPasswordReg: ""
    })
    
    const [hidden, setHidden] = useState(true);
    
    const register = () => {
        Axios.post('http://localhost:3001/register', {
            firstName: state.firstNameReg,
            lastName: state.lastNameReg,
            email: state.emailReg,
            password: state.passwordReg,
            confirmPassword: state.confirmPasswordReg
        }).then((response) => {
            console.log(response);
            if (!response.data.success) {
                alert(response.data.msg);
            } else {
                redirectToHome();
            }
        })
        // clearForm();
    };

    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }

    const toggleShow = () => {
        setHidden(!hidden)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (state.passwordReg === state.confirmPasswordReg) {
            register();
        } else {
            alert("Passwords do not match");
        }
    }
    
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    return (
        <div className="App">
            <div className = "registration">
                <h1>Sign Up</h1>
                <label>First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    id="firstNameReg"
                    value={state.firstNameReg ? state.firstNameReg : ""}
                    onChange={handleChange}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    id="lastNameReg"
                    value={state.lastNameReg ? state.lastNameReg : ""}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    id="emailReg"
                    value={state.emailReg ? state.emailReg : ""}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type={hidden ? "password" : "text"}
                    placeholder="Password"
                    id="passwordReg"
                    value={state.passwordReg ? state.passwordReg : ""}
                    onChange={handleChange}
                />
                <label>Confirm Password</label>
                <input
                    type={hidden ? "password" : "text"}
                    placeholder="Confirm Password"
                    id="confirmPasswordReg"
                    value={state.confirmPasswordReg ? state.confirmPasswordReg : ""}
                    onChange={handleChange}
                />
                <button onClick={toggleShow}> Show/Hide </button>
                <button onClick={handleRegister}> Sign Up! </button>

                <div>
                    <span>Already have an account? </span>
                    <button onClick={handleHistory}>Login here</button>
                </div>
            </div>
            
        </div>
    )

}

export default Register
