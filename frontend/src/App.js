import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Users from './components/Users';
import Home from './components/Home';
import Register from './components/Register';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
)

export default App;
