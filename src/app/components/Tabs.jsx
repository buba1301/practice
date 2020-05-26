import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { actions } from '../slices';
import Tickets from './Tickets.jsx';

import '../../css/Tabs.css';

const Tabs = () => {
  const { t } = useTranslation();

  const sort = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  const handleChange = (sortType) => () => {
    dispatch(actions.changeSortType({ sortType }));
  };

  const classNamesPrice = cn('results__filter-item', {
    'results__filter-item--active': sort.type === 'price',
  });

  const classNamesFastest = cn('results__filter-item', {
    'results__filter-item--active': sort.type === 'fastest',
  });

  return (
      <div className="results">
        <div className="results__filter">
          <span value="cheapiest" onClick={handleChange('price')} className={classNamesPrice}>
            {t('sort.price')}
          </span>
          <span value="fastest" onClick={handleChange('fastest')} className={classNamesFastest}>
            {t('sort.fastest')}
          </span>
        </div>
        <Tickets />
      </div>
  );
};

export default Tabs;
