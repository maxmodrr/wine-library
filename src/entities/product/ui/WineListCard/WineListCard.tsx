import s from './WineListCard.module.scss';
import { Fragment } from 'react/jsx-runtime';
import { WineCard } from '../WineCard';

interface Props {
  products: number[];
}

export const WineListCard: React.FC<Props> = ({ products }) => {
  return (
    <div className={s.WineListCard__cards}>
      <h2 className={s.WineListCard__title}>Popular</h2>
      {products.map((_, i) => (
        <Fragment key={i}>
          <WineCard />
          {(i + 1) % 3 === 0 && <div className={s.WineListCard__line}></div>}
        </Fragment>
      ))}
    </div>
  );
};
