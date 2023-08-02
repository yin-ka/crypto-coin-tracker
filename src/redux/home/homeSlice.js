import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coin: [],
  isLoading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
