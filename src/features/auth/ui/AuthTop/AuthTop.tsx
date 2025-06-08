import { Link } from 'react-router-dom';
import s from './AuthTop.module.scss';

interface Props {
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

export const AuthTop: React.FC<Props> = ({ title, subtitle, linkText, linkTo }) => {
  return (
    <div className={s.AuthTop}>
      <h1 className={s.AuthTop__sign}>{title}</h1>
      <p className={s.AuthTop__already}>
        <span>{subtitle}</span>
        <Link to={linkTo}>{linkText}</Link>
      </p>
    </div>
  );
};
