import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { feedApi } from './api/feedApi.ts';

const rootReducer = combineReducers({
  feedApi: feedApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      feedApi.middleware,
    ),
});

