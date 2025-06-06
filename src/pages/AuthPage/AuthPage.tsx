import s from './AuthPage.module.scss';
import { AuthTop } from '../../features/auth/ui/AuthTop';
import { AuthForm } from '../../features/auth/ui/AuthForm';

export const AuthPage = () => {
  
  return (
    <div className={s.AuthPage}>
      <div className={s.AuthPage__content}>
        <AuthTop />
        <AuthForm />
      </div>
    </div>
  );
};
