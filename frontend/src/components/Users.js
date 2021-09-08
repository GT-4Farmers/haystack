import {useState, useEffect} from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users/").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes.usersList))
    })

    return (<div>
        <h3>users</h3>
        {users.map(user => <li>user</li>)}
    </div>);
}

export default Users;
