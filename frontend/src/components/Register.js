import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';

function Register(props) {

    const [state, setState] = useState({
        firstNameReg: "",
        lastNameReg: "",
        emailReg: "",
        passwordReg: "",
        confirmPasswordReg: ""
    })
    
    // const [firstNameReg, setFirstNameReg] = useState('');
    // const [lastNameReg, setLastNameReg] = useState('');
    // const [emailReg, setEmailReg] = useState('');
    // const [passwordReg, setPasswordReg] = useState('');
    const [hidden, setHidden] = useState(true);

    const register = () => {
        if (state.firstNameReg === "" ||
            state.lastNameReg === "" ||
            state.emailReg === "" ||
            state.passwordReg === "") {
                alert("Please fill out all of the required fields.");
                return;
        }

        Axios.post('http://localhost:3001/register', {
            firstName: state.firstNameReg,
            lastName: state.lastNameReg,
            email: state.emailReg,
            password: state.passwordReg,
            // confirmPassword: state.confirmPasswordReg
        }).then((response) => {
            console.log(response);
            if (!response.data.success) {
                alert(response.data.msg);
            } else {
                alert(response.data.msg);
                // redirectToHome();
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

    // const clearForm = () => {
    //     setFirstNameReg('')
    //     setLastNameReg('')
    //     setEmailReg('')
    //     setPasswordReg('')
    // }

    const toggleShow = () => {
        setHidden(!hidden)
    }

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     if (state.password === state.confirmPassword) {
    //         register();
    //     } else {
    //         //
    //     }
    // }
    
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
                {/* <label>Confirm Password</label>
                <input
                    type={hidden ? "password" : "text"}
                    placeholder="Confirm Password"
                    id="confirmPasswordReg"
                    value={state.confirmPasswordReg ? state.confirmPasswordReg : ""}
                    onChange={handleChange}
                /> */}
                <button onClick={toggleShow}> Show/Hide </button>
                <button onClick={register}> Sign Up! </button>

                <div className="mt-2">
                    <span>Already have an account? </span>
                    <span 
                        className="loginText"
                        onClick={() => redirectToLogin()}>
                            Login here
                    </span> 
                </div>
            </div>
            
        </div>
    )

}

export default Register
