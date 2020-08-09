import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Entered from '../Entered';
import UserRoom from '../UserRoom';

import routes from '../../services/routes';
import { getIsAutorization } from '../../redux/authorization/authorization-selectors';
import './navigation.css';

const Navigation = ({ isAutorization }) => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routes.homePage}
        className="nav_link"
        activeClassName="active"
      >
        Главная
      </NavLink>
      {isAutorization ? (
        <>
          <NavLink
            to={routes.phonebookPage}
            className="nav_link"
            activeClassName="active"
          >
            Телефонная книга
          </NavLink>
          <Entered />
        </>
      ) : (
        <UserRoom />
      )}
    </nav>
  );
};

Navigation.propTypes = {
  isAutorization: propTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAutorization: getIsAutorization(state),
});

export default connect(mapStateToProps)(Navigation);
