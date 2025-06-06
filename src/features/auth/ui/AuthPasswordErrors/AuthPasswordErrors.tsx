import s from './AuthPasswordErrors.module.scss';
import clsx from 'clsx';
import { Icon } from '../../../../shared/ui/Icon';
import { passwordRules } from '../../constants/passwordRules';
import type { FieldErrors } from 'react-hook-form';
import type { FormFields } from '../../types';

interface Props {
  isDirty: boolean | undefined;
  errors: FieldErrors<Pick<FormFields, 'password'>>;
}

export const AuthPasswordsErrors: React.FC<Props> = ({ isDirty, errors }) => {
  const messages: string[] = errors.password?.message?.split(',') || [];

  return (
    <div className={s.AuthPasswordErrors}>
      {passwordRules.map((rule) => (
        <p key={rule} className={s.AuthPasswordErrors__passwordError}>
          <Icon
            name={!isDirty || messages.includes(rule) ? 'badPassword' : 'goodPassword'}
            className={clsx({
              [s.AuthPasswordErrorsIsError]: messages.includes(rule),
            })}
          />
          <span>{rule}</span>
        </p>
      ))}
    </div>
  );
};
