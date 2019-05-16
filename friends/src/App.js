import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList/index.jsx';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/protected" component={FriendList} />
    </div>
  );
}

export default App;
