import s from './Logo.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <Link to="/" className={` ${className} ${s.Logo}`}>
      wine valley
    </Link>
  );
};
