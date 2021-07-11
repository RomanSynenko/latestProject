import React from 'react';
import s from './List.module.scss';
import { useDispatch, useSelector } from 'react-redux';


import { getVisibleContacts } from '../../redux/contact/contact-selector';
import contactsOperation from '../../redux/contact/contact-operation';


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const deleteContact = e => {
        const id = e.target.dataset.id;
        dispatch(contactsOperation.deleteContact(id));
    };
    if (contacts.length === 0) return null
    return (
        <ul className={s.contact_list}>
            {contacts.map(({ id, name, number }) =>
                <li key={id} className={s.contact_item} >
                    <p className={s.contact_name}>{name}</p> : <p>{number}</p>
                    <button className={s.delete_button}
                        type="button"
                        onClick={deleteContact}
                        data-id={id}>
                        Delete
                </button>
                </li>
            )}
        </ul >
    )
};
export default ContactList;
