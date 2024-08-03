import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const registrationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.field}>
            <label className={css.label} htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.errorText} />
          </div>
          <div className={css.field}>
            <label  className={css.label} htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.errorText} />
          </div>
          <div className={css.field}>
            <label className={css.label} htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" className={css.input} />
            <ErrorMessage name="password" component="div" className={css.errorText} />
          </div>
          <button type="submit" className={css.button}>Register</button>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
