import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import authOperations from '../../../redux/authorization/authorization-operations';

class Register extends Component {
  static propTypes = {
    onRegister: propTypes.func.isRequired,
  };
  state = {
    name: '',
    email: '',
    password: '',
    errorName: '',
    errorEmail: '',
    errorPassword: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { errorName, errorPassword, errorEmail } = this.state;

    event.preventDefault();

    this.emptyField();

    this.props.onRegister(this.state);
    if (!errorName && !errorPassword && !errorEmail) {
      this.setState({ name: '', email: '', password: '' });
    }
  };

  emptyField() {
    let { name, email, password } = this.state;

    if (!name) {
      this.setState({ errorName: 'ERROR Name' });
    } else {
      this.setState({ errorName: '' });
    }
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
    const {
      name,
      email,
      password,
      errorName,
      errorEmail,
      errorPassword,
    } = this.state;

    return (
      <>
        <h1>Новый пользователь</h1>
        <p>Регистрация</p>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-group">
            <label>Имя</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          {errorName && <div className="textError">{errorName}</div>}
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
          <button className="submit submitRegister" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
