import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

function Profile() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/profile")
        .then(res => {
            setEmail(res.data.email)
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
        })
    }, []);

    const handleAbout = () => {
        history.push("/profile/about");
    }

    return (
    <div>
        <ul>
            <h2>{firstName} {lastName}</h2>
            <div>
                <button onClick={handleAbout}>About</button>
            </div>
            {/* <div>
                <button onClick={handlePhotos}>Photos</button>
            </div>
            <div>
                <button onClick={handleFriends}>Friends</button>
            </div> */}
        </ul>
    </div>);
}

export default Profile;