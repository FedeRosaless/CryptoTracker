import {createAsyncThunk} from '@reduxjs/toolkit';

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
