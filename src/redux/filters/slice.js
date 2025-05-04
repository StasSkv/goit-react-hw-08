import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', number: '' };

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});

export const filterReducer = filtersSlice.reducer;

export const { changeFilter } = filtersSlice.actions;
