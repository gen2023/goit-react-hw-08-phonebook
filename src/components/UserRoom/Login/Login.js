import React, { Component } from 'react';

import { connect } from 'react-redux';
import propTypes from 'prop-types';
import authOperations from '../../../redux/authorization/authorization-operations';

class Login extends Component {
  static propTypes = {
    onLogin: propTypes.func.isRequired,
  };
  state = {
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { errorPassword, errorEmail } = this.state;
    event.preventDefault();

    this.emptyField();

    this.props.onLogin(this.state);
    if (!errorPassword && !errorEmail) {
      this.setState({ name: '', email: '', password: '' });
    }

    //this.setState({ name: '', email: '', password: '' });
  };

  emptyField() {
    let { email, password } = this.state;

    if (!email) {
      this.setState({ errorEmail: 'ERROR Email' });
    } else {
      this.setState({ errorEmail: '' });
    }
    if (!password) {
      this.setState({ errorPassword: 'ERROR Password' });
    } else {
      this.setState({ errorPassword: '' });
    }
    return this.state;
  }

  render() {
    const { email, password, errorEmail, errorPassword } = this.state;

    return (
      <>
        <h1>Я уже зарегистрирован</h1>
        <p>Авторизация</p>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-group">
            <label>Почта</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          {errorEmail && <div className="textError">{errorEmail}</div>}
          <div className="form-group">
            <label>Пароль </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          {errorPassword && <div className="textError">{errorPassword}</div>}
          <button className="submit submitLogin" type="submit">
            Войти
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);
