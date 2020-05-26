
import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../css/Filter.css';
import { actions } from '../slices';

const Filter = () => {
  const { t } = useTranslation();

  const filterState = useSelector((state) => state.filters);

  const filters = Object.entries(filterState);

  const dispatch = useDispatch();

  const handleChange = (key) => () => {
    dispatch(actions.changeFilter({ key }));
  };

  return (
    <div className='filters'>
      <h2 className='filters__title'>{t('filters.title')}</h2>
      {filters.map(([key, value]) => (
        <div key={key} className="mb-3">
          <Form.Check
            type='checkbox'
            id={key}
            label={t(`filters.${key}`)}
            checked={value.state}
            onChange={handleChange(key)}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
