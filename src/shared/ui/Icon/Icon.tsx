import { icons } from '../../types/Icon';
import s from './Icon.module.scss';

type IconName = keyof typeof icons;

interface Props {
  name: IconName;
  onClick?: () => void;
  className?: string;
}

export const Icon: React.FC<Props> = ({ name, onClick = () => {}, className, ...props }) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    return null;
  }
  return <SvgIcon onClick={onClick} className={`${s.Icon} ${className || ''}`} {...props} />;
};
