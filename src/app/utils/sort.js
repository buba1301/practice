/* eslint-disable max-len */
import _ from 'lodash';

const mapped = {
  price: (tickets) => _.sortBy(tickets, ['price']).slice(0, 5),
  fastest: (tickets) => _.sortBy(tickets, ['allDuration']).slice(0, 5),
};

export default (tickets, sortType) => {
	console.log(sortType);
	return mapped[sortType](tickets);
}