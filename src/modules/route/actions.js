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

export const routeRequest = (values) => ({
  type: ROUTE_REQUEST,
  payload: { values },
});

export const routeFailure = (error) => ({
  type: ROUTE_FAILURE,
  payload: { error },
});

export const routeSuccess = (addresses) => ({
  type: ROUTE_SUCCESS,
  payload: { addresses },
});

export const getRouteRequest = (values) => ({
  type: GET_ROUTE_REQUEST,
  payload: { values },
});

export const getRouteFailure = (error) => ({
  type: GET_ROUTE_FAILURE,
  payload: { error },
});

export const getRouteSuccess = (route) => ({
  type: GET_ROUTE_SUCCESS,
  payload: { route },
});
export const isToggleRoute = (value) => ({
  type: TOGGLE_IS_ROUTE,
  payload: { value },
});
export const resetRoute = () => ({
  type: RESET_ROUTE,
});
