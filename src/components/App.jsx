import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { MainHeader, SecondHeader } from './App.styled';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('usersContact',
    [
      { id: 'id-1', name: 'Harry Potter', number: '459-12-56' },
      { id: 'id-2', name: 'Ronald Weasley', number: '443-89-12' },
      { id: 'id-3', name: 'Hermione Granger', number: '745-17-79' },
      { id: 'id-4', name: 'Rubeus Hagrid', number: '645-17-79' },
    ]
  );
  const [filter, setFilter] = useState('');

  const handleOnSubmit = ({name, number}) => {
    const checkedName = contacts.find(contact => {
      const nameLower = name.toLowerCase();
      const contactNameLower = contact.name.toLowerCase();
      return contactNameLower === nameLower || contact.number === number;
    });

    if (checkedName) {
      return alert(`${name} => Magic name is already in contacts!`);
    }

    const newUser = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, newUser]);
  }

  const heandleOnFilter = event => setFilter(event.target.value);

  const handleUpdateContactList = () => {

    return contacts.filter(contact => {
      const filterLower = filter.toLowerCase();
      const contactNameLower = contact.name.toLowerCase();

      return contactNameLower.includes(filterLower);
    })
  }

  const onDeleateButton = (id) => {
    const updateUsersList = contacts.filter(contact => contact.id !== id);
    setContacts([...updateUsersList]);
  }

  return (
    <div >
      <MainHeader>Hogwarts Magical Phonebook</MainHeader>
      <ContactForm onSubmit={handleOnSubmit} />
      <SecondHeader>Contacts</SecondHeader>
      <Filter filterValue={filter} filteringMethod={heandleOnFilter} />
      <ContactList contactsNames={handleUpdateContactList()} deleteBtn={onDeleateButton} />
    </div>
  )
}

export default App;
