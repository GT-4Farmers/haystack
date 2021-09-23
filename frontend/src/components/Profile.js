import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { UserContext } from './UserContext';
import { useHistory } from 'react-router';

function Profile() {
    const {value, setValue} = useContext(UserContext);
    const history = useHistory();
    
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    useEffect(() => {
        let unmounted = false;

        Axios.get("http://localhost:3001/profile")
        .then(res => {
            if (!unmounted) {
                setEmail(res.data.email)
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            }
        })

        return () => { unmounted = true };
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
    </div>
    );
}

export default Profile;