import s from './WineCard.module.scss';
import { Button } from '../../../../shared/ui/Button';
import { WineStars } from '../WineStars';

export const WineCard = () => {
  return (
    <article className={s.WineCard}>
      <div className={s.WineCard__blockImg}>
        <img className={s.WineCard__img} src="images/0.png" alt="wine-photo" />
      </div>
      <div className={s.WineCard__info}>
        <h3 className={s.WineCard__main}>Sauvignon Roses</h3>
        <p className={s.WineCard__ml}>
          <span>0,75 ml / </span>
          <span>Part num. 22994</span>
        </p>
        <p className={s.WineCard__country}>Italy</p>
        <WineStars count={5} />
      </div>
      <div className={s.WineCard__orderInfo}>
        <p className={s.WineCard__price}>200 uah</p>
        <Button>Add to cart</Button>
      </div>
    </article>
  );
};
