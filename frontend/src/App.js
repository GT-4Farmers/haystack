import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Axios from 'axios';
// import { UserContext } from './components/UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login")
    .then((res) => {
      setIsLoggedIn(res.data.success);
    })
  }, []);

  const requireAuth = (nextState, replace, next) => {
    console.log(nextState.location.pathname);
    console.log(!isLoggedIn);
    if (!isLoggedIn) {
      replace({
        pathname: "/home",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" exact component={Login} />
        <Route path="/register" component={Register} />

        {/* <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}> */}
          {/* {console.log("in usercontext:",isLoggedIn)}; */}
          <Route path="/home" component={Home} onEnter={requireAuth}/>
          <Route path="/profile" component={Profile} />
        {/* </UserContext.Provider > */}
      </Switch>
    </Router>
  )

}

export default App
