import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import '../App.css';
import AuthContext from '../states/AuthContext';

function Home(props) {
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

  console.log("@home, props.isloggedin:", props.isLoggedIn);

  function authView() {
    if (isLoggedIn === false) {
      return (
        <div className="registration">
          <button onClick={() => props.history.push("/")}>Not logged in?</button>
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

  return (
    <div>
      {authView()}
    </div>
  )
}

export default Home