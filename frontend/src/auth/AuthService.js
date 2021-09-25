import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios';

function AuthService() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        let unmounted = false;

        Axios.get("http://localhost:3001/login")
        .then((res) => {
            if (!unmounted) {
                setIsLoggedIn(res.data.success);
            }
        })

        return () => { unmounted = true };
    });

    let history = useHistory();

    if (!isLoggedIn) {
        history.push("/");
        return (
            <div>not logged</div>
        )
    } else {
        return (
            <div>logged</div>
        )
    }
}

export default AuthService
