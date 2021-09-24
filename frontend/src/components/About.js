import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

function About() {
    const history = useHistory();

    const [hiddenString, setHiddenString] = useState('hidden');
    const [hidden, setHidden] = useState(true);

    const [bio, setBio] = useState("");

    const [state, setState] = useState({
        email: "",
        bio: "",
        birthdate: "",
        location: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/profile/about")
        .then(res => {
            console.log(res.data.email);
            setState({email: res.data.email});
            console.log("state.email:", state.email);
            console.log(res.data.email);

            setBio(res.data.bio);

            setState({bio: res.data.bio});
            setState({birthdate: res.data.birthdate});
            setState({location: res.data.location});
            setState({phone: res.data.phone});
        })
    }, []);

    const editBio = () => {
        Axios.put('http://localhost:3001/profile/editabout', {
            bio: state.bio
        }).then((response) => {
            if (!response.data.success) {
                alert(response.data.msg);
            } else {
                console.log(response.data.success);
            }
        })
    };

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
        <div>
            <ul>
                <li>
                    email: {state.email}
                </li>
                <li>
                    bio: {state.bio} {bio}
                </li>
                <li>
                    birthdate: {state.birthdate}
                </li>
            </ul>
        </div>
        {/* <ul>
            <li>bio: {hidden ? state.bio : null}
                <input
                    type="text"
                    id="bio"
                    value={state.bio ? state.bio : ""}
                    onChange={handleChange}
                />
                <button id="bioBtn" type="text" onClick={editBio}>Save</button>
            </li>

            <li>birthday: {hidden ? state.birthdate : null}
            <input
                    type="text"
                    id="birthdate"
                    value={state.birthdate ? state.birthdate : ""}
                    onChange={handleChange}
                />
                <button id="birthdateBtn" onClick={handleChange}>Save</button>
            </li> */}
            
            {/* <li>location: {location}<input id="location" value={location}/><input type="button" id="location" value="Save" onClick={handleChange}/></li>
            <li>email: {email}</li>
            <li>phone: {phone}</li> */}
        {/* </ul>
        <div>
                <button onClick={handleEdit}>Edit About</button>
        </div>
        <div>
                <button onClick={handleBack}>Back</button>
        </div>
        <input type="button" id="toggler" value="Hide/Unhide" onClick={action} /> */}
    </div>);
}

export default About;