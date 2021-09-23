import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import { UserContext } from './UserContext';
import { Redirect } from 'react-router';

function Home() {

    // const {value, setValue} = useContext(UserContext);
    const [email, setEmail] = useState("")

    // console.log("in home:",value);
    
    useEffect(() => {
        let unmounted = false;

        Axios.get("http://localhost:3001/login")
        .then((res) => {
            if(res && !unmounted) {
                setEmail(res.data.email);
                // setValue(true);
            }
        })

        return () => { unmounted = true };
    });

    // if (!value) {
    //     return <Redirect to='/' />
    // }
    
    return (
        <>
        <div>
            <h1>Home</h1>
            Hi {email}
            
        </div>
        </>
    )
}

export default Home