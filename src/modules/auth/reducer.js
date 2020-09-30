import {
  AUTH_USER_REQUEST,
  AUTH_USER_FAILURE,
  AUTH_USER_SUCCESS,
  LOGOUT_USER,
} from "./types";
const storageName = "userData";
// localStorage.removeItem(storageName);

const initialState = {
  token: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).token
    : null,
  loading: false,
  error: null,
  isAuthenticated: JSON.parse(localStorage.getItem(storageName))
    ? JSON.parse(localStorage.getItem(storageName)).isAuthenticated
    : false,
};
export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_USER_FAILURE:
      const { error } = action.payload;

      return {
        ...state,
        loading: false,
        error,
      };
    case AUTH_USER_SUCCESS:
      localStorage.setItem(
        storageName,
        JSON.stringify({ token: action.payload.token, isAuthenticated: true })
      );
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload.token,
      };
    case LOGOUT_USER:
      localStorage.removeItem(storageName);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
