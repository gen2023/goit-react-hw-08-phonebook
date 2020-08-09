import axios from "axios";
import {
  listContactRequest,
  listContactSuccess,
  listContactError,
  saveContactRequest,
  saveContactSuccess,
  saveContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contacts-actions";

const listContacts = () => (dispatch) => {
  dispatch(listContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(listContactSuccess(data)))
    .catch((error) => dispatch(listContactError(error.message)));
};

const saveContact = ({ name, number }) => (dispatch) => {
  const contact = { name, number };

  dispatch(saveContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(saveContactSuccess(data)))
    .catch((error) => dispatch(saveContactError(error.message)));
};

const removeContact = (contactId) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch((error) => dispatch(removeContactError(error.message)));
};

export default { saveContact, removeContact, listContacts };
