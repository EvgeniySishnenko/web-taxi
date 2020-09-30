import { put, spawn, call, takeEvery } from "redux-saga/effects";
import { authUserFailure, authUserSuccess } from "./auth/actions.js";
import { cardUserFailure, cardUserSuccess } from "./profile/actions.js";
import {
  routeFailure,
  routeSuccess,
  getRouteSuccess,
  getRouteFailure,
} from "./route/actions.js";

import { AUTH_USER_REQUEST } from "./auth/types";
import { CARD_USER_REQUEST } from "./profile/types";
import { ROUTE_REQUEST, GET_ROUTE_REQUEST } from "./route/types";

import { auth, route } from "./api";

// worker
export function* workerAuthUser(action) {
  try {
    const data = yield call(auth, action.payload.path, action.payload.values);
    if (data.success) {
      yield put(authUserSuccess(data.token));
    } else {
      yield put(authUserFailure(data.error));
    }
  } catch (error) {
    yield put(authUserFailure(error));
  }
}
// worker
export function* workerCardProfile(action) {
  try {
    const data = yield call(auth, action.payload.path, action.payload.values);
    if (data.success) {
      yield put(cardUserSuccess(action.payload.values));
    } else {
      yield put(cardUserFailure(data.error));
    }
  } catch (error) {
    yield put(cardUserFailure(error));
  }
}

// worker
export function* workerRoute(action) {
  try {
    const data = yield call(route, action.payload.values);
    yield put(routeSuccess(data.addresses));
  } catch (error) {
    yield put(routeFailure(error));
  }
}
// worker
export function* workerGetRoute(action) {
  try {
    const data = yield call(route, action.payload.values);
    yield put(getRouteSuccess(data));
  } catch (error) {
    yield put(getRouteFailure(error));
  }
}
//  watcher
export function* watchSendUseAuth() {
  yield takeEvery(AUTH_USER_REQUEST, workerAuthUser);
}
// watcher
export function* watchCardProfile() {
  yield takeEvery(CARD_USER_REQUEST, workerCardProfile);
}
// watcher
export function* watchRoute() {
  yield takeEvery(ROUTE_REQUEST, workerRoute);
}
// watcher
export function* watchGetRoute() {
  yield takeEvery(GET_ROUTE_REQUEST, workerGetRoute);
}
export default function* saga() {
  yield spawn(watchSendUseAuth);
  yield spawn(watchCardProfile);
  yield spawn(watchRoute);
  yield spawn(watchGetRoute);
}
