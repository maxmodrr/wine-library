import s from './SelectedFilter.module.scss';
import { useFilter } from '../../model/filter-state';
import { Icon } from '../../../../shared/ui/Icon';
import type { MouseEvent } from 'react';

export const SelectedFilter = () => {
  const filters = useFilter((state) => state.filters);
  const removeFilter = useFilter((state) => state.remove);

  const handleDeleteSelected = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName !== 'svg') {
      return;
    }

    const div = target.closest('div');

    if (!div) {
      return;
    }

    const filterValue = div.dataset.filter;

    if (!filterValue) {
      return;
    }

    removeFilter(filterValue);
  };

  return (
    <div className={s.SelectedFilter}>
      <p className={s.SelectedFilter__title}>Filters</p>
      <div className={s.SelectedFilter__block} onClick={(e) => handleDeleteSelected(e)}>
        {filters.map((filter) => (
          <div className={s.SelectedFilter__value} key={filter} data-filter={filter}>
            <span>{filter}</span>
            <Icon name="close" />
          </div>
        ))}
      </div>
    </div>
  );
};
