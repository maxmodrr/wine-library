import type { FormAuthFields } from '../../types';
import { Button } from '../../../../shared/ui/Button';
import { FormSection } from '../FormSection';
import { formAuth } from '../../constants/formAuth';
import { type SubmitHandler } from 'react-hook-form';
import { FormWrapper } from '../FormWrapper';
import { useCallback } from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';

export const AuthForm = () => {
  const { register, handleSubmit, errors } = useAuthForm<FormAuthFields>();

  const hasErrors = !!Object.keys(errors).length;

  const successSubmit: SubmitHandler<FormAuthFields> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <FormWrapper onSubmit={handleSubmit(successSubmit)}>
      {formAuth.map((section) => (
        <FormSection
          key={section.title}
          section={section}
          register={register}
          errors={errors}
          isAuth={true}
        />
      ))}

      <Button disabled={hasErrors}>Login</Button>
    </FormWrapper>
  );
};
