import { configureStore } from '@reduxjs/toolkit';
import listSlice from './slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    listSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
