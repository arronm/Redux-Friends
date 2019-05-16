import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Friends List</Link>
        </li>
      </ul>
      <Route path="/login" component={LoginForm} />
      <PrivateRoute exact path="/protected" component={FriendList} />
    </div>
  );
}

export default App;
