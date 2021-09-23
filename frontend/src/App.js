import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Axios from 'axios';
import EditAbout from './components/EditAbout';


function App() {
  // const [title, updateTitle] = useState(null);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login")
    .then((res) => {
      // console.log(res);
    })
  }, []);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
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
