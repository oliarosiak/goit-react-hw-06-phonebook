import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
    ({name, number}) => {
        console.log(name, number);
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);
export const deleteContact = createAction('contacts/deleteContact');

export const filterContacts = createAction('filter/filterContacts');
