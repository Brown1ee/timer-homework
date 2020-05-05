import {
  takeLatest,
  put,
  call,
  race,
  take,
  select,
  delay,
} from "redux-saga/effects";
import { STOP_TIMER, RESTART_TIMER, ASYNC_START_TIMER } from "../actionTypes";
import { startTimer, incrementTimer } from "../actions";

function* startTimerSaga() {
  yield put(startTimer());
  const state = yield select();
  while (state.started) {
    yield put(incrementTimer());
    yield delay(1000);
  }
}

function* startPullTimer() {
  yield race({
    task: call(startTimerSaga),
    cancel: take([STOP_TIMER, RESTART_TIMER]),
  });
}

export default function* asyncStartTimer() {
  yield takeLatest(ASYNC_START_TIMER, startPullTimer);
}
