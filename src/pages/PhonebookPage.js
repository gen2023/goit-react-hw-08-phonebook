import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import ContactsForm from '../components/ContactsForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import contactsOperations from '../redux/contacts/contacts-operations';
import { getLoading } from '../redux/contacts/contacts-selectors';

import Loader from '../components/Loader';

class PhonebookPage extends Component {
  componentDidMount() {
    this.props.listContacts();
  }
  render() {
    return (
      <div className="content contentPhonebook">
        <div className="formPhonebook">
          <h1>Phonebook</h1>
          <ContactsForm />
        </div>

        <Filter />
        <div>
          <h2>Contact</h2>
          {this.props.isLoading && <Loader />}
          <ContactList />
        </div>
      </div>
    );
  }
}
PhonebookPage.propTypes = {
  listContacts: propTypes.func,
  isLoading: propTypes.bool,
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  listContacts: () => dispatch(contactsOperations.listContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);
