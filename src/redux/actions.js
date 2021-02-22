/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('add', ({ name, number }) => ({
    payload: {
        id: uuidv4(),
        name,
        number
    },
}));
const deleteContact = createAction('delete');
const changeFilter = createAction('changeFilter');
export default { addContact, deleteContact, changeFilter };