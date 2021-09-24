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
import EditAbout from './components/EditAbout';
import AuthContext from './states/AuthContext';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

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
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/home" render={(props) => <Home {...props} isLoggedIn={isLoggedIn} /> }/> */}
          <Route path="/home" component={Home} />
          <Route path="/profile/editabout" component={EditAbout} />
          <Route path="/profile/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
        </Switch>
      </AuthContext.Provider>
    </Router>
  )

}

export default App
