import s from './RegisterPasswordErrors.module.scss';
import clsx from 'clsx';
import { Icon } from '../../../../shared/ui/Icon';
import { passAuthRules } from '../../constants/passAuthRules';
import type { FieldErrors } from 'react-hook-form';
import type { FormRegisterFields } from '../../types';

interface Props {
  isDirty: boolean | undefined;
  errors: FieldErrors<Pick<FormRegisterFields, 'password'>>;
}

export const RegisterPasswordsErrors: React.FC<Props> = ({ isDirty, errors }) => {
  const messages: string[] = errors.password?.message?.split(',') || [];

  return (
    <div className={s.RegisterPasswordErrors}>
      {passAuthRules.map((rule) => (
        <p key={rule} className={s.RegisterPasswordErrors__passwordError}>
          <Icon
            name={!isDirty || messages.includes(rule) ? 'badPassword' : 'goodPassword'}
            className={clsx({
              [s.RegisterPasswordErrorsIsError]: messages.includes(rule),
            })}
          />
          <span>{rule}</span>
        </p>
      ))}
    </div>
  );
};
