import React, { useState } from 'react'
import Axios from 'axios'
import '../App.css';
import { useHistory } from 'react-router';

function EditAbout(props) {
    const history = useHistory();

    const [state, setState] = useState({
        bio: null,
        birthdate: null,
        location: null,
        phone: null
    })
    
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
                redirectToAbout();
            }
        })
    };

    const redirectToAbout = () => {
        history.push('/profile/about');
    }

    const handleEdit = (e) => {
        e.preventDefault();
        edit();
    }
    
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    return (
        <div className="App">
            <div className = "editabout">
                <h1>Edit About</h1>
                <label>Bio</label>
                <input
                    type="text"
                    placeholder="Bio"
                    id="bio"
                    value={state.bio ? state.bio : ""}
                    onChange={handleChange}
                />
                <label>Birthday</label>
                <input
                    type="text"
                    placeholder="Birthday"
                    id="birthdate"
                    value={state.birthdate ? state.birthdate : ""}
                    onChange={handleChange}
                />
                <label>Location</label>
                <input
                    type="text"
                    placeholder="Location"
                    id="location"
                    value={state.location ? state.location : ""}
                    onChange={handleChange}
                />
                <label>Phone</label>
                <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    value={state.phone ? state.phone : ""}
                    onChange={handleChange}
                />
                <button onClick={handleEdit}> Submit </button>

                <div>
                    <button onClick={redirectToAbout}>Cancel</button>
                </div>
            </div>
            
        </div>
    )

}

export default EditAbout;
