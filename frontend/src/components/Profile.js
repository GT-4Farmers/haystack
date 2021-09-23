import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { UserContext } from './UserContext';

function Profile() {

    const {value, setValue} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        let unmounted = false;

        Axios.get("http://localhost:3001/profile")
        .then(res => {
            if (!unmounted) {
                setEmail(res.data.email)
                setBio(res.data.bio);
                setBirthdate(res.data.birthdate);
                setLocation(res.data.location);
                setPhone(res.data.phone);
            }
        })

        return () => { unmounted = true };
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