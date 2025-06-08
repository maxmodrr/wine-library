import { Logo } from '../../shared/ui/Logo';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={s.Footer}>
      <div className={s.Footer__content}>
        <Logo className={s.Footer__logo} />
        <div className={s.Footer__info}>
          <p>Contact:</p>
          <a
            href="mailto:winevalley@gmail.com?subject=Привіт&body=Я хотів би щось класне вам написати"
            target="_blank"
          >
            winevalley@gmail.com
          </a>
          <a href="tel:050-777-50-50">050-777-50-50</a>
        </div>
      </div>
    </div>
  );
};
