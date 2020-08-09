import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/authorization/authorization-selectors';
import authOperations from '../../redux/authorization/authorization-operations';
import './Entered.css';

const Entered = ({ name, onLogout }) => (
  <div className="LogoutContainer">
    <span>
      Welcome, <span className="name">{name}</span>
    </span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
Entered.propTypes = {
  name: propTypes.string.isRequired,
  onLogout: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Entered);
