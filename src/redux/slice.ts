import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type Params = {
  id: number;
  title: string;
  image: string;
  items: string[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ListSliceState {
  items: Params[];
  status: Status;
}

export const fetchList = createAsyncThunk<Params[]>(
  'list/fetchListStatus',
  async (params) => {
    // const { id, title, image, items } = params;
    const { data } = await axios.get(
      'https://65746aecf941bda3f2afba20.mockapi.io/toDo'
    );

    return data;
  }
);

const initialState: ListSliceState = {
  items: [],
  status: Status.LOADING,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Params[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchList.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = listSlice.actions;

export default listSlice.reducer;
