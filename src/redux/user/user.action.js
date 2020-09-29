import { UserActionTypes } from './user.types';

export const setCurrerntUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
