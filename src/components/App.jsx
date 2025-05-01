import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectError, selectLoading } from '../redux/contactsSlice';
import Loader from './Loader/Loader';
import { ToastContainer} from 'react-toastify';
import Toast from './Toast/Toast';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList />
      {error && <Toast message={'Sorry, there was an error.'} />}
      <ToastContainer />
    </div>
  );
}

export default App;
