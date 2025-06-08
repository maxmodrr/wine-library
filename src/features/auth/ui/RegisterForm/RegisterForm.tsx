import { type SubmitHandler } from 'react-hook-form';
import { formRegister } from '../../constants/formRegister';
import { FormSection } from '../FormSection';
import type { FormRegisterFields } from '../../types';
import { RegisterPasswordsErrors } from '../RegisterPasswordErrors/RegisterPasswordErrors';
import { Button } from '../../../../shared/ui/Button';
import { FormWrapper } from '../FormWrapper';
import { useAuthForm } from '../../hooks/useAuthForm';

export const RegisterForm = () => {
  const { register, handleSubmit, errors, dirtyFields } = useAuthForm<FormRegisterFields>();

  const successSubmit: SubmitHandler<FormRegisterFields> = (data) => {
    console.log(data);
  };

  const hasErrors = !!Object.keys(errors).length;

  return (
    <FormWrapper onSubmit={handleSubmit(successSubmit)}>
      {formRegister.map((section) => (
        <FormSection<FormRegisterFields> section={section} register={register} errors={errors} />
      ))}
      <RegisterPasswordsErrors isDirty={dirtyFields.password} errors={errors} />
      <Button disabled={hasErrors}>Sign up</Button>
    </FormWrapper>
  );
};
