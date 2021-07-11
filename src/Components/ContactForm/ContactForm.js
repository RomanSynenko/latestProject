import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";


import { getLoad, getContactName } from '../../redux/contact/contact-selector';
import contactOperation from '../../redux/contact/contact-operation';
import Loader from '../Loader';

import s from './Form.module.scss';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const loadContact = useSelector(getLoad);
    const loadName = useSelector(getContactName);

    useEffect(() => {
        dispatch(contactOperation.fetchContact());
    }, [dispatch]);

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                console.warn(``);
        }
    }
    const uniqueContact = name => {
        const contact = !loadName.find(contact => contact === name);
        return contact;
    };
    const onSubmit = useCallback(
        data => {
            dispatch(contactOperation.addContact(data));
        },
        [dispatch],
    );
    const handleFormSubmit = e => {
        e.preventDefault();
        uniqueContact(name);
        if (name !== '') {
            if (!uniqueContact(name)) {
                alert(`'${name} is already in contacts'`);
                return;
            } else {
                onSubmit({ name: name, number: number });
                resetForm();
            }
            return;
        }
        alert('Enter the name or number');
    }

    return (
        <>
            {loadContact && <Loader />}
            <h2 className={s.title}>Contact Form</h2>
            <form className={s.contact_form} onSubmit={handleFormSubmit}>
                <input
                    className={s.contact_input}
                    type="text" name='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={handleChangeForm} />
                <input
                    className={s.contact_input}
                    type="tel" name='number'
                    placeholder='Enter phone number'
                    value={number}
                    onChange={handleChangeForm} />
                <button className={s.contact_bth}
                    type='submit'>Add contact</button>
            </form>
        </>
    )
};






// import React from "react";
// import "./styles.css";

// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//     }

//     inc() {
//         this.setState((prevState) => ({ count: prevState.count + 1 }));
//         // this.setState((prevState) => ({ count: prevState.count + 1 }));
//         // this.setState((prevState) => ({ count: prevState.count + 1 }));
//         // this.setState((prevState) => ({ count: prevState.count + 1 }));
//     }

//     render() {
//         return (
//             <div>
//                 <div>count {this.state.count}</div>
//                 <button onClick={this.inc.bind(this)}>inc</button>
//             </div>
//         );
//     }
// }

// export default function App() {
//     return <Counter />;
// }
