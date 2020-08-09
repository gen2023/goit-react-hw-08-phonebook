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
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

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
          <div className="form-group">
            <label>Пароль </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
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
