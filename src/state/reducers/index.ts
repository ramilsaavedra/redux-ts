import { combineReducers } from 'redux';
import { reducer as repositoriesReducer } from './repositoriesReducer';

export const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof reducers>;
