import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './Filter.module.scss';
import { filterContact } from '../../redux/contact/contact-action';
import { getFilter } from '../../redux/contact/contact-selector';


const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const onChange = useCallback(
        e => {
            dispatch(filterContact(e.target.value))
        },
        [dispatch],
    )
    return (
        <div className={s.search_block}>
            <h2 className={s.title}>Contacts list</h2>
            <input
                className={s.contact_input}
                type="text"
                name='filter'
                value={value}
                onChange={onChange}
                placeholder='Enter name for your Search'
            />
        </div>
    )
};

export default Filter;
