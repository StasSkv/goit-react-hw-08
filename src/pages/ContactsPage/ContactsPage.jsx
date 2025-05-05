import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import s from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';


const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.contacts}>
      <div className="container">
        <div className={s.formsWrap}>
          <ContactForm />
          <SearchBox />
        </div>
        <div>{isLoading && <Loader />}</div>
        <ContactList />
      </div>
    </section>
  );
};

export default ContactsPage;
