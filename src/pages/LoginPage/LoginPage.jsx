import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
