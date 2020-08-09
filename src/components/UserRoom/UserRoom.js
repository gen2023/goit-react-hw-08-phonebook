import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../services/routes';
import './UserRoom.css';

const UserRoom = () => (
  <>
    <NavLink to={routes.userRoom} className="nav_link" activeClassName="active">
      Личный кабинет
    </NavLink>
  </>
);

export default UserRoom;
