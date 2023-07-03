import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Harry Potter', number: '459-12-56' },
  { id: 'id-2', name: 'Ronald Weasley', number: '443-89-12' },
  { id: 'id-3', name: 'Hermione Granger', number: '745-17-79' },
  { id: 'id-4', name: 'Rubeus Hagrid', number: '645-17-79' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(6),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {      
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
