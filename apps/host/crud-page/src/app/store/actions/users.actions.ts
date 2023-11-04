import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
  '[User] Add User',
  props<{ name: string; email: string; phone: string; website: string }>()
);
