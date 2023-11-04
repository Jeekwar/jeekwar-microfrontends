import { ActionReducerMap } from '@ngrx/store';
import { User, reducer as userReducer } from './store/reducers/users.reducers';

export interface AppState {
  users: User;
}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducer,
};
