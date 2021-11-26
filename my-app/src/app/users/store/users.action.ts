import { createAction, props } from "@ngrx/store";
import { User } from "../shared/user.model";

export const fetchUsers = createAction('FETCH_USERS');
export const fetchUsersSuccess = createAction('FETCH_USERS_SUCCESS', props<{users: User[]}>());
