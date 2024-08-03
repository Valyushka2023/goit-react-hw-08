import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.field}>
            <label className={css.label} htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.errorText} />
          </div>
          <div className={css.field}>
            <label className={css.label} htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" className={css.input} />
            <ErrorMessage name="password" component="div" className={css.errorText} />
          </div>
          <button type="submit" className={css.button}>Login</button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;

