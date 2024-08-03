import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '..//../redux/contacts/operations';

const phoneNumberFormat = /^\d{3}-\d{2}-\d{2}$/;

const contactSchema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long'),
  number: yup.string().required('Phone number is required').matches(phoneNumberFormat, 'Phone number must be in xxx-xx-xx format'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.field}>
            <label className={css.label} htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" className={css.input} onChange={handleChange} value={values.name} />
            {touched.name && errors.name && <ErrorMessage name="name" component="div" className={css.errorText} />}
          </div>
          <div className={css.field}>
            <label className={css.label} htmlFor="number">Number</label>
            <Field id="number" name="number" type="tel" className={css.input} onChange={handleChange} value={values.number} />
            {touched.number && errors.number && <ErrorMessage name="number" component="div" className={css.errorText} />}
          </div>
          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;


