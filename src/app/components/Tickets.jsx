import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import '../../css/Tickets.css';
import filter from '../utils/filter';
import makeSort from '../utils/sort';
import TicketInfo from './TicketInfo.jsx';

const renderEmptyFilter = (t) => (
  <div className='results__details'>
    <h5>{t('filters.empty')}</h5>
  </div>
);

const renderTicketHeader = (sortedTickets) => (
  sortedTickets.map(({
    price,
    carrier,
    segments,
    id,
  }) => (
    <div className='results__details' key={id}>
      <div className='results__title'>
        <p className="results__price">{price.toLocaleString('ru')} Р</p>
        <span className='results__carrier'>
          <img className='results__img' src={`http://pics.avs.io/99/36/${carrier}.png`} alt='Логотип авиакомпании' />
        </span>
      </div>
      <TicketInfo segments={segments} />
    </div>
  ))
);

const Tickets = () => {
  const { t } = useTranslation();

  const { tickets, filters, sort } = useSelector((state) => state);

  if (tickets.length === 0) {
    return null;
  }

  const filteredTickets = filter(filters, tickets);

  const sortedTickets = makeSort(filteredTickets, sort.type);
  console.log(sortedTickets);
  return (
    sortedTickets.length === 0 ? renderEmptyFilter(t) : renderTicketHeader(sortedTickets)
  );
};

export default Tickets;
