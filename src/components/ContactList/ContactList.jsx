import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  
  return (
  <>
      <h2>Мої контакти</h2>
      <ul className={css.userList}>
        {contacts.map((contact) => (
          <li className={css.userItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
  </>
  );
};

export default ContactList;
