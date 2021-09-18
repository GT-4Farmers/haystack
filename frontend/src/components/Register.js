import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

function Register() {
    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="App">
            <div className = "registration">
                <h1>Registration</h1>
                <label>First Name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setFirstNameReg(e.target.value);
                    }}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setLastNameReg(e.target.value);
                    }}
                />
                <label>Email</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setEmailReg(e.target.value);
                    }}
                />
                <label>Password</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button onClick={register}> Sign Up! </button>
            </div>
        </div>
    )

}

export default Register
