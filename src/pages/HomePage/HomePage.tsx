import s from './HomePage.module.scss';
import { WineListCard } from '../../entities/product/ui/WineListCard';
import { WineListFilter } from '../../features/product-filter/ui/WineListFilter';

const testArr: number[] = Array.from({ length: 25 });
const testFilters = [
  {
    title: 'price',
    values: ['200-500', '500-800', '800-1100', '1100-1400', '1400+'],
  },
  {
    title: 'colors',
    values: ['bla', 'bla-bla', 'bla-bla-bla'],
  },
];

export const HomePage = () => {
  return (
    <div className={s.HomePage}>
      <div className={s.HomePage__bg}>
        <img src="images/home-bg.png" alt="home-background" />
      </div>

      <WineListFilter filtersData={testFilters} />
      <WineListCard products={testArr} />
    </div>
  );
};
