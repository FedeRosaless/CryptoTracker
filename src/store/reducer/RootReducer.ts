import {createSlice} from '@reduxjs/toolkit';
import {CryptoState} from '../types';
import {getCrypto, updateCrypto} from '../../store/actions';

const initialState = {
  cryptos: [],
  loading: false,
} as CryptoState;

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCrypto.pending, state => {
        state.loading = true;
      })
      .addCase(getCrypto.fulfilled, (state, action) => {
        state.cryptos.push(action.payload);
        state.loading = false;
      })
      .addCase(getCrypto.rejected, state => {
        state.loading = false;
      })
      .addCase(updateCrypto.fulfilled, (state, {payload}) => {
        state.cryptos = payload;
      });
  },
});

export default cryptoSlice.reducer;
