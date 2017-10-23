
import {
  TEST_CLICK,
  SHOW_POPUP,
} from '../Constants/';

export function testClick(buttonText) {
  return {
    type: TEST_CLICK,
    payload: buttonText,
  }
}

export function proceedPopup(popupContentComponent) {
  return {
    type: SHOW_POPUP,
    payload: popupContentComponent,
  }
}
