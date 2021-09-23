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
        {/* <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}> */}
          {/* {console.log("in usercontext:",isLoggedIn)}; */}
          {/* <Route path="/home" component={Home} onEnter={requireAuth}/> */}
        {/* </UserContext.Provider > */}
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile/editabout" component={EditAbout} />
        <Route path="/profile/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register}>
          <Register/>
        </Route>
      </Switch>
    </Router>
  )

}

export default App
