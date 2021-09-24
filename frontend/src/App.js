import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Axios from 'axios';
// import { UserContext } from './components/UserContext';
import EditAbout from './components/EditAbout';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  Axios.defaults.withCredentials = true;
  
  useEffect(() => {
    let unmounted = false;

    Axios.get("http://localhost:3001/login")
    .then((res) => {
        if (!unmounted) {
            setIsLoggedIn(res.data.success);
        }
    })

    return () => { unmounted = true };
  });

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile/editabout" component={EditAbout} />
        <Route path="/profile/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )

}

export default App
