import { useState, useEffect } from 'react';
import Axios from 'axios';

function Profile() {
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/profile")
        .then(res => {
            setEmail(res.data.email)
            setBio(res.data.bio);
            setBirthdate(res.data.birthdate);
            setLocation(res.data.location);
            setPhone(res.data.phone);
        })
    });

    return (
    <div>
        <ul>
            <li>email: {email}</li>
            <li>bio: {bio}</li>
            <li>birthdate: {birthdate}</li>
            <li>location: {location}</li>
            <li>phone: {phone}</li>
        </ul>
    </div>);
}

export default Profile;