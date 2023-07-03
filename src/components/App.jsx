import { MainHeader, SecondHeader } from './App.styled';

import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  return (
    <div>
      <MainHeader>Hogwarts Magical Phonebook</MainHeader>
      <ContactForm />
      <SecondHeader>Contacts</SecondHeader>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
