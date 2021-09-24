import React from 'react';
import { withRouter, Link } from "react-router-dom";
import '../App.css';
import Axios from 'axios';
import { useHistory } from 'react-router';

function Header(props) {
  function renderNav() {
    if (props.location.pathname === '/home' || props.location.pathname === '/profile') {
      return (
        <>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        </>
      )
    }
  }

  const history = useHistory();

  const logout = () => {
    Axios.post('http://localhost:3001/logout')
      .then((response) => {
        if (response && response.data.success) {
          history.push("/");
        }
      })
  };

  function handleLogout() {
    logout();
    props.history.push('/');
  }

  return (
    <div className="registration">
      {/* <span>{props.title || title}</span> */}


      {renderNav()}
    </div>
  )
}
export default withRouter(Header);