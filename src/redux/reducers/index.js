import {
  INCREMENT_TIMER,
  START_TIMER,
  STOP_TIMER,
  RESTART_TIMER,
} from "../actionTypes/index";

const initialState = {
  curentTime: 0,
  started: false,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_TIMER:
      return { ...state, curentTime: state.curentTime + 1 };
    case START_TIMER:
      return { ...state, started: true };
    case STOP_TIMER:
      return { ...state, started: false };
    case RESTART_TIMER:
      return { ...state, started: false, curentTime: 0 };
    default:
      return state;
  }
}
