import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; 
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '..//..//redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  if (!contact) {
    return null;
  }

  const { id, name, number } = contact;
  const formattedNumber = number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');

  return (
    <div className={css.container}>
    <div className={css.contact}>
      <div className={css.infoButton}>
        <div className={css.info}>
          <div className={css.user}>
            <FaUser className={`${css.icon} ${css.userIcon}`} />
            <p className={css.name}>{name}</p>
          </div>
          <div className={css.phone}>
            <FaPhoneAlt className={`${css.icon} ${css.phoneIcon}`} />
            <p className={css.number}>{formattedNumber || number}</p>
          </div>
        </div>
        <button type="button" className={css.deleteButton} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
  </div>
</div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;


