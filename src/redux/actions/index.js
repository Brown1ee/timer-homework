import {
  INCREMENT_TIMER,
  ASYNC_START_TIMER,
  START_TIMER,
  STOP_TIMER,
  RESTART_TIMER,
} from "../actionTypes/index.js";

export const incrementTimer = () => {
  return {
    type: INCREMENT_TIMER,
  };
};

export const asyncTimer = () => {
  return {
    type: ASYNC_START_TIMER,
  };
};

export const startTimer = () => {
  return {
    type: START_TIMER,
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
  };
};

export const restartTimer = () => {
  return {
    type: RESTART_TIMER,
  };
};
