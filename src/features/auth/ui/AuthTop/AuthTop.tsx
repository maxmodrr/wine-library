import { Link } from 'react-router-dom';
import s from './AuthTop.module.scss';

export const AuthTop = () => {
  return (
    <div className={s.AuthTop}>
      <h1 className={s.AuthTop__sign}>sign up</h1>
      <p className={s.AuthTop__already}>
        <span>Already have an account?</span>
        <Link to="/auth/login">Log in</Link>
      </p>
    </div>
  );
};
