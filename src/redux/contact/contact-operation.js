import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contact-action';

const fetchContact = () => async dispatch => {
    dispatch(fetchContactRequest());
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error.message));
    }
};

const addContact = contact => async dispatch => {
    dispatch(addContactRequest());
    try {
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess({ ...data }));
    } catch (error) {
        dispatch(addContactError(error.message));
    }
};

const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId));
    } catch (error) {
        dispatch(deleteContactError(error.message));
    }
};

export default { fetchContact, addContact, deleteContact };
