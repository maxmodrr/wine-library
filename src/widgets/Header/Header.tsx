import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../../shared/ui/Icon';
import { Logo } from '../../shared/ui/Logo';
import { Search } from '../../features/search/ui';

export const Header = () => {
  const [activeLang] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenLanguageMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.Header}>
      <div className={s.Header__content}>
        <div className={s.Header__leftSide}>
          <Logo />
          <div className={s.Header__searchBlock}>
            <Search />
          </div>
        </div>
        <div className={s.Header__rightSide}>
          <Link to="/about-us" className={s.Header__item}>
            About us
          </Link>
          <ul
            className={clsx({
              [s.HeaderMenuOpen]: isMenuOpen,
            })}
            onClick={handleOpenLanguageMenu}
          >
            <li className={s.Header__item}>{activeLang}</li>
            <ul className={s.Header__languages}>
              <li className={s.Header__item}>English</li>
              <li className={s.Header__item}>Ukrainian</li>
            </ul>
          </ul>
          <Link to="/cart">
            <Icon name="cart" />
          </Link>
          <Link to="/auth/register">
            <Icon name="profile" />
          </Link>
        </div>
      </div>
    </header>
  );
};
