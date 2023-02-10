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

export const updateCrypto = createAsyncThunk(
  'crypto/updateCrypto',
  async (name: string[]) => {
    let value: Crypto[] = [];
    for (let i = 0; i < name.length; i++) {
      let response = await fetch(
        `${process.env.REACT_APP_BASE_URL}${name[i]}/metrics`,
      );
      value.push((await response.json()).data);
    }

    return value;
  },
);
