import React from 'react';

import ContactForm from "../Components/ContactForm";
import ContactList from "../Components/ContatctList";
import Filter from "../Components/Filter";



const ContactPage = () => {
    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    )
};
export default ContactPage;
