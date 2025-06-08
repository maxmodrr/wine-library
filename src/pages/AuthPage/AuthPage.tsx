import { AuthTop } from '../../features/auth/ui/AuthTop';
import { AuthForm } from '../../features/auth/ui/AuthForm';

export const AuthPage = () => {
  return (
    <>
      <AuthTop
        title="Log in"
        subtitle="Don`t have an account?"
        linkText="Sign up"
        linkTo="/auth/register"
      />
      <AuthForm />
    </>
  );
};
