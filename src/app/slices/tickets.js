import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import routes from '../routs';


const slice = createSlice({
  name: 'tickets',
  initialState: [],
  reducers: {
    fetchTicketsSuccess: (state, { payload: { data } }) => data,
  },
});

const ticketsActions = { ...slice.actions };

const fetchTickets = () => async (dispatch) => {
  // dispatch(ticketsActions.fetchTicketsRequest());
  try {
    const urlSearchId = routes.getIdPath();
    const responseSearchId = await axios.get(urlSearchId);

    const urlTickets = routes.ticketsPath(responseSearchId.data.searchId);
    const response = await axios.get(urlTickets);

    const durationСalculation = (ticket) => {
      const [there, back] = ticket.segments;
      return there.duration + back.duration;
    };

    const data = response.data.tickets.map((ticket) => ({
      ...ticket,
      id: _.uniqueId(),
      allDuration: durationСalculation(ticket),
    }));

    dispatch(ticketsActions.fetchTicketsSuccess({ data }));
  } catch (e) {
    // dispatch(ticketsActions.fetchTicketsFailure());
    console.log(e);
    throw e;
  }
};

export { ticketsActions, fetchTickets };
export default slice.reducer;
