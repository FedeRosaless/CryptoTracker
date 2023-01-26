import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Crypto} from 'interfaces';

const initialState = {
  cryptos: [] as Crypto[],
  loading: false,
};

export const getCrypto = createAsyncThunk(
  'crypto/getCrypto',
  async (name: string) => {
    try {
      const {data} = await fetch(
        `${process.env.REACT_APP_BASE_URL}${name}/metrics`,
      ).then(res => res.json());
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const updateCrypto = createAsyncThunk(
  'crypto/updateCrypto',
  async (name: string[]) => {
    const value: Crypto[] = [];
    for (let i = 0; i < name.length; i++) {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${name[i]}/metrics`,
      );
      value.push((await response.json()).data);
    }

    return value;
  },
);

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
      .addCase(updateCrypto.fulfilled, (state, action) => {
        state.cryptos = action.payload;
      });
  },
});

export default cryptoSlice.reducer;
