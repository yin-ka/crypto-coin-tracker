import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.coinlore.net/api/tickers/';

const initialState = {
  coins: [],
  isLoading: false,
};

export const fetchCoins = createAsyncThunk(
  'coin/fetchCoins',
  async (thunkAPI) => {
    try {
      const res = await axios.get(baseUrl);
      const coin = await res.data.data;
      return coin;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const homeSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchCoins.fulfilled, (state, { payload }) => ({
        ...state,
        coins: payload,
      }));
  },
});

export default homeSlice.reducer;
