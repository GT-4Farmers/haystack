import React from 'react';
import { withRouter } from "react-router-dom";
import '../App.css';

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
    function handleLogout() {
        // localStorage.removeItem(login_access_token)
        props.history.push('/')
    }
    return(
        <div className="registration">
            {/* <span>{props.title || title}</span> */}

            {renderLogout()}
        </div>
    )
}
export default withRouter(Header);