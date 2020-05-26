import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    all: { state: false },
    direct: { state: true, quantity: 0 },
    oneTransfer: { state: true, quantity: 1 },
    twoTransfer: { state: true, quantity: 2 },
    threeTransfer: { state: false, quantity: 3 },
  },
  reducers: {
    changeFilter: (state, { payload: { key } }) => {
      if (key !== 'all') {
        state[key].state = !state[key].state;
        state.all.state = false;
        return;
      }
      state[key].state = !state[key].state;
      state.direct.state = state[key].state;
      state.oneTransfer.state = state[key].state;
      state.twoTransfer.state = state[key].state;
      state.threeTransfer.state = state[key].state;
    },
  },
});

const filterActions = { ...slice.actions };
export { filterActions };
export default slice.reducer;
