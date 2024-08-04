import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts, selectLoading, selectError } from '..//..//redux/contacts/slice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

