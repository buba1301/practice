import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'sort',
  initialState: { type: 'price' },
  reducers: {
    changeSortType: (state, { payload: { sortType } }) => {
      console.log('ACTIONS', sortType)
      state.type = sortType
    }
  },
});

const sortActions = { ...slice.actions };
export { sortActions };
export default slice.reducer;
