import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';

function Home() {
    const [email, setEmail] = useState("");
    
    useEffect(() => {
        let unmounted = false;

        Axios.get("http://localhost:3001/login")
        .then((res) => {
            if(res && !unmounted) {
                setEmail(res.data.email);
            }
        })
        return () => { unmounted = true };
    });

    return (
        <>
        <div>
            <h1>Home</h1>
            Hi {email}
            {/* {isL} */}
        </div>
        </>
    )
}

export default Home