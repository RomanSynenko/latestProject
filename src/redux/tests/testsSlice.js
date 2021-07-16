import { createSlice } from '@reduxjs/toolkit';

export const testsSlice = createSlice({
  name: 'tests',
  initialState: [],
  reducers: {
    resultTest: (state, { payload }) => {
      if (state.some(el => el.id === payload.id)) {
        return state.map(el =>
          el.id === payload.id ? { ...payload } : { ...el },
        );
      }

      const result = state.map(el => ({ ...el }));

      return [...result, payload];
    },
    resetResult: () => [],
  },
});

export const { resultTest, resetResult } = testsSlice.actions;
