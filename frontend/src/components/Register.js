import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

function Register() {
    
    const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [hidden, setHidden] = useState(true);

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
            if (!response.data.success) {
                alert(response.data.msg);
            }
        })
        clearForm();
    };

    const clearForm = () => {
        setFirstNameReg('')
        setLastNameReg('')
        setEmailReg('')
        setPasswordReg('')
    }

    const toggleShow = () => {
        setHidden(!hidden)
    }

    return (
        <div className="App">
            <div className = "registration">
                <h1>Registration</h1>
                <label>First Name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        if (e.target.value === '') {
                            return;
                        } else {
                            setFirstNameReg(e.target.value);
                        }
                    }}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        if (e.target.value === '') {
                            return;
                        } else {
                            setLastNameReg(e.target.value);
                        }
                    }}
                />
                <label>Email</label>
                <input
                    type="text"
                    onChange={(e) => {
                        if (e.target.value === '') {
                            return;
                        } else {
                            setEmailReg(e.target.value);
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
                            setPasswordReg(e.target.value);
                        }
                    }}
                />
                <button onClick={toggleShow}> Show/Hide </button>
                <button onClick={register}> Sign Up! </button>
            </div>
        </div>
    )

}

export default Register
