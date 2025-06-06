import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { Icon } from '../Icon';
import { useState } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const [activeLang, setActiveLang] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenLanguageMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.Header}>
      <div className={s.Header__content}>
        <div className={s.Header__leftSide}>
          <Link to="/" className={s.Header__logo}>
            wine valley
          </Link>
          <div className={s.Header__searchBlock}>
            <input type="text" className={s.Header__search} placeholder="Search" />
            <Icon name="search" className={s.Header__iconSearch} />
          </div>
        </div>
        <div className={s.Header__rightSide}>
          <Link to="/auth/register" className={s.Header__item}>
            Sign up
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
          <Link to="/profile">
            <Icon name="profile" />
          </Link>
        </div>
      </div>
    </header>
  );
};
