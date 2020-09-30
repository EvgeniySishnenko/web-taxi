import {
  ROUTE_REQUEST,
  ROUTE_FAILURE,
  ROUTE_SUCCESS,
  GET_ROUTE_REQUEST,
  GET_ROUTE_FAILURE,
  GET_ROUTE_SUCCESS,
  TOGGLE_IS_ROUTE,
  RESET_ROUTE,
} from "./types";

const initialState = {
  loading: false,
  error: false,
  addresses: null,
  route: null,
  isRoute: false,
};

export default function card(state = initialState, action) {
  switch (action.type) {
    case ROUTE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ROUTE_FAILURE:
      const { error } = action.payload;

      return {
        ...state,
        loading: false,
        error,
      };
    case ROUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        addresses: action.payload.addresses,
      };
    case GET_ROUTE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ROUTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case GET_ROUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        route: action.payload.route,
      };
    case TOGGLE_IS_ROUTE:
      return {
        ...state,
        isRoute: action.payload.value,
      };
    case RESET_ROUTE:
      return {
        ...state,
        route: null,
      };
    default:
      return state;
  }
}
