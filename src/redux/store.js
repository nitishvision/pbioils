import {configureStore} from '@reduxjs/toolkit';
import socialReducer from './slices/socialSlice';

export const store = configureStore({
  reducer: {
    social: socialReducer,
  },
});
