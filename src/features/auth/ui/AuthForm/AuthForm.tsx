import s from './AuthForm.module.scss';
import { Fragment } from 'react/jsx-runtime';
import { Input } from '../../../../shared/ui/Input';
import { Button } from '../../../../shared/ui/Button';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { FormFields } from '../../types';
import { formState } from '../../constants/formState';
import { AuthPasswordsErrors } from '../AuthPasswordErrors/AuthPasswordErrors';

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields},
  } = useForm<FormFields>({
    mode: 'onChange',
  });


  const successSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(successSubmit)} className={s.AuthForm}>
      {formState.map((section) => (
        <div key={section.title} className={s.AuthForm__blockForm}>
          <h2 className={s.AuthForm__info}>{section.title}</h2>
          <div className={s.AuthForm__formContent}>
            {section.fields.map((field) => (
              <Fragment key={field.name}>
                <Input
                  type={field.type}
                  label={field.label}
                  hasError={!!errors?.[field.name]?.message}
                  placeholder={field.placeholder}
                  errorMessage={
                    field.name !== 'password' ? errors?.[field.name]?.message : undefined
                  }
                  autoComplete="off"
                  {...register(field.name, field.rules)}
                />
              </Fragment>
            ))}
          </div>
        </div>
      ))}
      <AuthPasswordsErrors isDirty={dirtyFields.password}  errors={errors} />
      <Button>Sign Up</Button>
    </form>
  );
};
