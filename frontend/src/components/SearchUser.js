import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../App.css';

function SearchUser() {

  const [userToSearch, setUserToSearch] = useState("");

  useEffect(() => {
    let unmounted = false;

    Axios.get("http://localhost:3001/searchUser")
    .then(res => {
        if (!unmounted) {
            console.log(res);
        }
    })

    return () => { unmounted = true };
  }, [userToSearch]);

  const handleChange = (e) => {
    setUserToSearch(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1> Search User </h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search for a User"
          value={userToSearch}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchUser
