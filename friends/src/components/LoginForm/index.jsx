import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import { login } from '../../actions';

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
    this.props.login({ ...this.state });
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
 
export default connect(null, { login })(LoginForm);
