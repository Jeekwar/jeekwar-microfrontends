import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/users.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserState {
  user: User;
}

export const initialState: User = {
  name: '',
  email: '',
  phone: '',
  website: '',
};

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, user) => {
    return {
      ...state,
      ...user,
    };
  })
);

const selectUserState = createFeatureSelector('users');

export const selectUser = createSelector(selectUserState, (state) => state);

export function reducer(state: User | undefined, action: Action) {
  return userReducer(state, action);
}
