/* eslint-disable consistent-return */
import _ from 'lodash';

const filterTickets = (quantity, tickets) => tickets.filter(({ segments }) => {
  const [there, back] = segments;
  return there.stops.length === quantity && back.stops.length === quantity;
});

export default (filters, tickets) => {
  if (filters.all.state === true) {
    return tickets;
  }

  const activeFilter = Object.values(filters).filter((value) => value.state === true);

  const result = activeFilter.map(({ quantity }) => filterTickets(quantity, tickets));

  return _.flatten(result);
};
