import {
  all,
  takeLatest,
  put,
  call,
  race,
  take,
  select,
} from "redux-saga/effects";
import * as types from "../actionTypes";
import * as actions from "../actions";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* startTimerSaga() {
  const state = yield select();

  yield put(actions.startTimer());
  while (state.started) {
    yield put(actions.incrementTimer());
    yield delay(1000);
  }
}

function* startPullTimer() {
  yield race({
    task: call(startTimerSaga),
    cancel: take([types.STOP_TIMER, types.RESTART_TIMER]),
  });
}

function* asyncStartTimer() {
  yield takeLatest(types.ASYNC_START_TIMER, startPullTimer);
}

export default function* timerRoot() {
  yield all([asyncStartTimer()]);
}
