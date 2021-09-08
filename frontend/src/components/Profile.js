import { useState, useEffect } from 'react'

function Profile() {
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetch("/profile/")
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => { 
            setEmail(jsonRes.email);
            setBio(jsonRes.bio);
            setBirthdate(jsonRes.birthdate);
            setLocation(jsonRes.location);
            setPhone(jsonRes.phone);
        })
    })

    return (<div>
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
