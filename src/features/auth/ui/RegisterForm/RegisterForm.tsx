import { useForm, type SubmitHandler } from 'react-hook-form';
import { formRegister } from '../../constants/formRegister';
import { FormSection } from '../FormSection';
import type { FormRegisterFields } from '../../types';
import { RegisterPasswordsErrors } from '../RegisterPasswordErrors/RegisterPasswordErrors';
import { Button } from '../../../../shared/ui/Button';
import { FormWrapper } from '../FormWrapper';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormRegisterFields>({
    mode: 'all',
  });

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
