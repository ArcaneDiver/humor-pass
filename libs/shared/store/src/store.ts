import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rooterReducer';

const logger = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export { store };
