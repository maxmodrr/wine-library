import { icons } from '../../types/Icon';
import s from './Icon.module.scss';

type IconName = keyof typeof icons;

interface Props {
  name: IconName;
  className?: string;
}

export const Icon: React.FC<Props> = ({ name, className, ...props }) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    return null;
  }
  return <SvgIcon className={`${s.Icon} ${className || ''}`} {...props} />;
};
