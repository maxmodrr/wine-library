import { useFilter } from '../../model/filter-state';
import { SelectedFilter } from '../SelectedFilter';
import { WineFilter } from '../WineFilter';
import s from './WineListFilter.module.scss';

interface Props {
  filtersData: { title: string; values: string[] }[];
}

export const WineListFilter: React.FC<Props> = ({ filtersData }) => {
  const filters = useFilter((state) => state.filters);

  return (
    <div className={s.WineListFilter}>
      {!!filters.length && <SelectedFilter />}
      {filtersData.map((filter) => (
        <WineFilter key={filter.title} filterName={filter.title} filterValues={filter.values} />
      ))}
    </div>
  );
};
