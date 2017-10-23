import {
  DEFAULT_BUTTON_TEXT,
  TEST_CLICK,
  SHOW_POPUP,
} from '../Constants/';

const initialState = {
  buttonClickedText: DEFAULT_BUTTON_TEXT,
  popupContent: null,
};

export default function application(state = initialState, action) {

  switch (action.type) {
    case TEST_CLICK:
      return {...state, buttonClickedText: action.payload};
    case SHOW_POPUP:
      return {...state, popupContent: action.payload};
    default:
      return state;
  }

}