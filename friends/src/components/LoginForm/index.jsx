import React, { Component } from 'react';
import Input from './Input';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('form submitted', this.state.username);
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <Input
          name="username"
          value={username}
          onChangeHandler={this.onChangeHandler}
        />
        <Input
          name="password"
          value={password}
          onChangeHandler={this.onChangeHandler}
          type="password"
        />
        <input type="submit" value="Login"/>
      </form>
    );
  }
}
 
export default LoginForm;
