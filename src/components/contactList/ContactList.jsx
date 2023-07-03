import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

import { GiSnitchQuidditchBall, GiHarryPotterSkull } from 'react-icons/gi';
import { ListContainer, ListItem, ListBtn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const onDeleateButton = contact => dispatch(deleteContact(contact.id));

  const filteringContacts = contacts.filter(contact => {
    const filterLower = filterValue.toLowerCase();
    const contactNameLower = contact.name.toLowerCase();

    return contactNameLower.includes(filterLower);
  });

  return (
    <ListContainer>
      {filteringContacts.map(contact => (
        <ListItem key={contact.id}>
          <div>
            <GiSnitchQuidditchBall /> <span>{contact.name}:</span>{' '}
            <span>{contact.number}</span>
          </div>
          <ListBtn type="button" onClick={() => onDeleateButton(contact)}>
            {' '}
            <GiHarryPotterSkull /> Avada Kedavra
          </ListBtn>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;