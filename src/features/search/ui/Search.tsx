import s from './Search.module.scss';
import { Icon } from '../../../shared/ui/Icon';

export const Search = () => {
  return (
    <>
      <input type="text" className={s.Search} placeholder="Search" />
      <Icon name="search" className={s.Search__icon} />
    </>
  );
};
