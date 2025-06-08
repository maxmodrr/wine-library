import { AuthTop } from '../../features/auth/ui/AuthTop';
import { RegisterForm } from '../../features/auth/ui/RegisterForm';
export const RegisterPage = () => {
  return (
    <>
      <AuthTop
        title="Sign up"
        subtitle="Already have an account?"
        linkText="Log in"
        linkTo="/auth/login"
      />
      <RegisterForm />
    </>
  );
};
