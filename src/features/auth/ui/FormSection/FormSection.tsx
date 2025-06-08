import { Fragment } from 'react/jsx-runtime';
import { Input } from '../../../../shared/ui/Input';
import type { IFormSection } from '../../types';
import s from './FormSection.module.scss';
import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Icon } from '../../../../shared/ui/Icon';
import { useState } from 'react';

interface Props<T extends FieldValues> {
  section: IFormSection;
  register: UseFormRegister<T>;
  errors: Partial<Record<keyof T, FieldError>>;
  isAuth?: boolean;
}

export const FormSection = <T extends FieldValues>({
  section,
  register,
  errors,
  isAuth,
}: Props<T>) => {
  const [isPassShown, setIsPassShown] = useState(false);

  const handleClick = () => setIsPassShown(!isPassShown);

  return (
    <div key={section.title} className={s.FormSection__blockForm}>
      <h2 className={s.FormSection__info}>{section.title}</h2>
      <div className={s.FormSection__formContent}>
        {section.fields.map((field) => (
          <Fragment key={field.name}>
            <Input
              type={isPassShown && field.name === 'password' ? 'text' : field.type}
              label={field.label}
              hasError={!!errors?.[field.name as keyof T]?.message}
              placeholder={field.placeholder}
              errorMessage={
                isAuth || field.name !== 'password'
                  ? errors?.[field.name as keyof T]?.message
                  : undefined
              }
              {...register(field.name as Path<T>, field.rules as RegisterOptions<T>)}
            >
              {field.name === 'password' && (
                <Icon onClick={handleClick} name="closedEye" className={s.FormSection__closedEye} />
              )}
            </Input>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
