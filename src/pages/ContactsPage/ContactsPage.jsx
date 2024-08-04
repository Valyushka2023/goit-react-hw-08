import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectContacts } from '../../redux/contacts/selectors';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.container}>
      <h1 className={css.title} >Phonebook</h1>
      <ContactForm />
          <SearchBox />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>There are no contacts to display.</p>
      )}

    </div>
  );
};

export default ContactsPage;


