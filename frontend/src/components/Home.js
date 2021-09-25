import { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import AuthContext from '../states/AuthContext';
import { useHistory } from 'react-router';
import '../App.css';

function Home() {
  let history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let unmounted = false;
    Axios.get("http://localhost:3001/login")
    .then((res) => {
      console.log(res);
      if (res && !unmounted) {
        setEmail(res.data.email);
      }
    })
    return () => { unmounted = true };
  }, []);

  if (isLoggedIn === false) {
    return (
      <div className="registration">
        <button onClick={() => history.push("/")}>Not logged in?</button>
      </div>
    )
  } else {
    return (
      <div className="App">
        <h1>Home</h1>
        Hi {email}
      </div>
    )
  }
}

export default Home