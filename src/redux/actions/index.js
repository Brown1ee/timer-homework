import {
  INCREMENT_TIMER,
  ASYNC_START_TIMER,
  START_TIMER,
  STOP_TIMER,
  RESTART_TIMER,
} from "../actionTypes";

export const incrementTimer = () => ({ type: INCREMENT_TIMER });

export const asyncTimer = () => ({ type: ASYNC_START_TIMER });

export const startTimer = () => ({ type: START_TIMER });

export const stopTimer = () => ({ type: STOP_TIMER });

export const restartTimer = () => ({ type: RESTART_TIMER });
