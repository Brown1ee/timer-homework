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
      state.started = true;
      return { ...state };
    case STOP_TIMER:
      state.started = false;
      return { ...state };
    case RESTART_TIMER:
      state.started = false;
      state.curentTime = 0;
      return { ...state };
    default:
      return state;
  }
}
