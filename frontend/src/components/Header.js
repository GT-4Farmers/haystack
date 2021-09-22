import React from 'react';
import { withRouter } from "react-router-dom";
import '../App.css';
import Axios from 'axios';
import { useHistory } from 'react-router';

function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    // if(props.location.pathname === '/') {
    //     title = 'Login'
    // }
    function renderLogout() {
        if(props.location.pathname === '/home'){
            return(
                <div>
                    <button onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }

    const history = useHistory();

    // const handleHistory = () => {
    //     history.push("/register");
    // }

    // const getCredentials = () => {
    //     Axios.get('http://localhost:3001/sessions')
    // }

    const logout = () => {
        Axios.post('http://localhost:3001/logout', {
            // userID: props.email
        })
        .then((response) => {
            console.log("successfully logged out");
            console.log(response);
            if (response && response.data.success) {
                history.push("/");
            }
        })
    };

    function handleLogout() {
        logout();
        props.history.push('/');
    }

    return(
        <div className="registration">
            {/* <span>{props.title || title}</span> */}

            {renderLogout()}
        </div>
    )
}
export default withRouter(Header);