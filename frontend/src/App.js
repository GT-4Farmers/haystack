import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Profile from './components/Profile';
import Users from './components/Users';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';


function App() {
  const [title, updateTitle] = useState(null);

  return (
    <Router>
      <Header title={title}/>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register}>
          <Register updateTitle={updateTitle}/>
        </Route>
      </Switch>
    </Router>
  )

}

export default App
