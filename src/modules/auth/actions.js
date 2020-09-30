import {
  AUTH_USER_REQUEST,
  AUTH_USER_FAILURE,
  AUTH_USER_SUCCESS,
  LOGOUT_USER,
} from "./types.js";

export const authUserRequest = (values, path) => ({
  type: AUTH_USER_REQUEST,
  payload: { values, path },
});

export const authUserFailure = (error) => ({
  type: AUTH_USER_FAILURE,
  payload: { error },
});

export const authUserSuccess = (token) => ({
  type: AUTH_USER_SUCCESS,
  payload: { token },
});
export const logoutUser = () => ({
  type: LOGOUT_USER,
});
