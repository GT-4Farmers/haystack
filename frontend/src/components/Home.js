import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Home() {
    const [email, setEmail] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:3001/login")
        .then((res) => {
            setEmail(res.data.email)
        })
    }, []);

    return (
        <div>
            <h1>Home</h1>
            Hi {email}
        </div>
    )
}

export default Home