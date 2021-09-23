import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

function About() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/profile/about")
        .then(res => {
            setEmail(res.data.email)
            setBio(res.data.bio);
            setBirthdate(res.data.birthdate);
            setLocation(res.data.location);
            setPhone(res.data.phone);
        })
    }, []);

    const handleBack = () => {
        history.push("/profile");
    }

    const handleEdit = () => {
        history.push("/profile/editabout");
    }

    return (
    <div>
        <ul>
            <li>bio: {bio}</li>
            <li>birthday: {birthdate}</li>
            <li>location: {location}</li>
            <li>email: {email}</li>
            <li>phone: {phone}</li>
        </ul>
        <div>
                <button onClick={handleEdit}>Edit About</button>
        </div>
        <div>
                <button onClick={handleBack}>Back</button>
        </div>
    </div>);
}

export default About;