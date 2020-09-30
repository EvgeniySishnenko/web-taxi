import {
  CARD_USER_REQUEST,
  CARD_USER_FAILURE,
  CARD_USER_SUCCESS,
} from "./types.js";

export const cardUserRequest = (values, path) => ({
  type: CARD_USER_REQUEST,
  payload: { values, path },
});

export const cardUserFailure = (error) => ({
  type: CARD_USER_FAILURE,
  payload: { error },
});

export const cardUserSuccess = (values) => ({
  type: CARD_USER_SUCCESS,
  payload: { values },
});
