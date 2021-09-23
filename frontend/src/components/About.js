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

    const [hiddenString, setHiddenString] = useState('hidden');
    const [hidden, setHidden] = useState(true);

    const [state, setState] = useState({
        bio: null,
        birthdate: null,
        location: null,
        phone: null
    })

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

    const edit = () => {
        Axios.put('http://localhost:3001/profile/editabout', {
            bio: state.bio,
            birthdate: state.birthdate,
            location: state.location,
            phone: state.phone
        }).then((response) => {
            if (!response.data.success) {
                alert(response.data.msg);
            } else {
                console.log(response.data.success);
            }
        })
    };

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleBack = () => {
        history.push("/profile");
    }

    const handleEdit = () => {
        // history.push("/profile/editabout");

    }

    // const hideUnhide = () => {
    //     setHidden(!hidden);
    //     setHiddenString('visible');
    // }

    const action = () => {
        setHidden(!hidden);
        
        if(hidden) {
            setHiddenString('hidden');
            document.getElementById('bio').style.visibility = 'hidden';
            document.getElementById('bioBtn').style.visibility = 'hidden';
            document.getElementById('birthdate').style.visibility = 'hidden';
            document.getElementById('birthdateBtn').style.visibility = 'hidden';

        } else {
            setHiddenString('visible');
            document.getElementById('bio').style.visibility = 'visible';
            document.getElementById('bioBtn').style.visibility = 'visible';
            document.getElementById('birthdate').style.visibility = 'visible';
            document.getElementById('birthdateBtn').style.visibility = 'visible';
        }
    }

    return (
    <div className="registration">
        <h1>About</h1>
        <ul>
            <li>bio: {hidden ? bio : null}
                <input id="bio" type={hiddenString} value={bio}/>
                <button id="bioBtn" type={hiddenString} onClick={handleChange}>Save</button>
            </li>

            <li>birthday: {hidden ? birthdate : null}
                <input id="birthdate" value={birthdate}/>
                <button id="birthdateBtn" onClick={handleChange}>Save</button>
            </li>
            
            {/* <li>location: {location}<input id="location" value={location}/><input type="button" id="location" value="Save" onClick={handleChange}/></li>
            <li>email: {email}</li>
            <li>phone: {phone}</li> */}
        </ul>
        <div>
                <button onClick={handleEdit}>Edit About</button>
        </div>
        <div>
                <button onClick={handleBack}>Back</button>
        </div>
        <input type="button" id="toggler" value="Hide/Unhide" onClick={action} />
    </div>);
}

export default About;