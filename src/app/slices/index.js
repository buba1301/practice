import { combineReducers } from 'redux';
import tickets, { ticketsActions, fetchTickets } from './tickets';
import filters, { filterActions } from './filters';
import sort, { sortActions } from './sort';

export default combineReducers({
  tickets,
  filters,
  sort,
});

const actions = {
  ...ticketsActions,
  ...filterActions,
  ...sortActions,
};

const asyncActions = {
  fetchTickets,
};

export {
  actions,
  asyncActions,
};
