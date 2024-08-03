import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Register Page</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;


