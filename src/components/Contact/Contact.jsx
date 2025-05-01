import css from './Contact.module.css';
import { AiFillContacts } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div className={css.userInfo}>
        <p className={css.userName}>
          <span>
            <AiFillContacts size={20} />
          </span>
          {contact.name}
        </p>
        <p className={css.userPhone}>
          <span>
            <AiFillPhone size={20} />
          </span>
          {contact.number}
        </p>
      </div>
      <button type="button" className={css.btnDeleteUser} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
