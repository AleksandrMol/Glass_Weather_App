import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import axios from 'axios';
import thunk from 'redux-thunk';
import weatherReducer from '../features/weather/weatherSlise';

export const store = configureStore({
    reducer: {
       weather: weatherReducer,
    },
    middleware:  getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios
      }
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;