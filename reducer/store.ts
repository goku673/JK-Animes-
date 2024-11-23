
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import { api } from './services/api';

const store = configureStore({
  reducer: {
    users: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
