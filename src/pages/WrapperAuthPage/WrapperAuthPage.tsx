import s from './WrapperAuthPage.module.scss';
import { Outlet } from 'react-router-dom';

export const WrapperAuthPage = () => {
  return (
    <div className={s.WrapperAuthPage}>
      <div className={s.WrapperAuthPage__content}>
        <Outlet />
      </div>
    </div>
  );
};
