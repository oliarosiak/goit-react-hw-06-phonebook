import PropTypes from 'prop-types';
import { GiSnitchQuidditchBall, GiHarryPotterSkull } from "react-icons/gi";
import { ListContainer, ListItem, ListBtn } from './ContactList.styled';

const ContactList = ({ contactsNames, deleteBtn }) => (
    <ListContainer >
        {contactsNames.map(contactName => (
            <ListItem key={contactName.id} >
                <div>
                    <GiSnitchQuidditchBall /> <span>{contactName.name}:</span> <span>{contactName.number}</span>
                </div>
                <ListBtn type='button' onClick={()=>deleteBtn(contactName.id)} > <GiHarryPotterSkull/> Avada Kedavra</ListBtn> 
            </ListItem>
        ))}
    </ListContainer>
)

ContactList.propTypes = {
    contactsNames: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    deleteBtn: PropTypes.func.isRequired,
};

export default ContactList;