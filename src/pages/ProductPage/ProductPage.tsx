import { WineStars } from '../../entities/product/ui/WineStars';
import s from './ProductPage.module.scss';

export const ProductPage = () => {
  return (
    <div className={s.ProductPage}>
      <div className={s.ProductPage__content}>
        <div className={s.ProductPage__blockImg}>
          <img className={s.ProductPage__img} src="images/0-big.png" alt="" />
        </div>
        <div className={s.ProductPage__mainInfo}>
          <h1>WINE / Sauvignon Rose 0,75 ml</h1>
          <p>Part num. 22994</p>
          <WineStars count={5} />
          <p className={s.ProductPage__description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iure obcaecati fugit
            earum possimus placeat adipisci non. Dolores praesentium blanditiis quaerat voluptates
            vero ipsam tenetur distinctio, consequatur at natus repellendus, commodi aspernatur aut
            est, molestiae illum soluta. Nostrum, nobis blanditiis, nam facilis alias quis placeat
            illum eligendi porro, eius ullam.
          </p>
        </div>
        <div className={s.ProductPage__secondaryInfo}>
          <div className="">
            <h3>COUNTRY</h3>
            <p>Ukraine</p>
          </div>
          <div className="">
            <h3>TYPE</h3>
            <p>Dry Rosé wine</p>
          </div>
          <div className="">
            <h3>WINERY</h3>
            <p>Marlborough Sun</p>
          </div>
        </div>
        <h3 className={s.ProductPage__mayLike}>You may like</h3>
      </div>
    </div>
  );
};
