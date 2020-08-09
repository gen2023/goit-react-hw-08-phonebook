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
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

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
