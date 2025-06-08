import s from './WineFilter.module.scss';
import { useFilter } from '../../model/filter-state';
import { memo } from 'react';

interface Props {
  filterName: string;
  filterValues: string[];
}

export const WineFilter: React.FC<Props> = memo(({ filterName, filterValues }) => {
  const filters = useFilter((state) => state.filters);
  const addFilter = useFilter((state) => state.add);
  const removeFilter = useFilter((state) => state.remove);

  const handleChangeFilter = (newValue: string) => {
    if (filters.includes(newValue)) {
      removeFilter(newValue);
    } else {
      addFilter(newValue);
    }
  };

  return (
    <div className={s.WineFilter}>
      <p className={s.WineFilter__title}>{filterName}</p>
      <div className={s.WineFilter__allFilters}>
        {filterValues.map((value, i) => (
          <div key={i} className={s.WineFilter__checkBoxBlock}>
            <input
              id={value}
              className={s.WineFilter__checkBox}
              type="checkbox"
              checked={filters.includes(value)}
              onChange={() => handleChangeFilter(value)}
            />
            <label className={s.WineFilter__label} htmlFor={value}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
});
