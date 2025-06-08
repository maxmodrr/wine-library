import s from './WineStars.module.scss';
import StarIcon from '../../assets/icons/icon-star.svg?react';

interface Props {
  count: 0 | 1 | 2 | 3 | 4 | 5;
}

const STARS_COUNT = 5;

export const WineStars: React.FC<Props> = ({ count }) => {
  const arrStars: number[] = Array.from({ length: STARS_COUNT });

  return (
    <div className={`${s.WineStars} ${s[`WineStars--${count}`]}`}>
      {arrStars.map((_, i) => (
        <StarIcon className={s.WineStars__star} key={i} />
      ))}
      <span>{count}</span>
    </div>
  );
};
