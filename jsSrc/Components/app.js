/**
 * Всё приложение, включая обработчики событий живут здесь.
 */

import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {MAIN_NODES} from './nodes';
import Test from './Test/Test';
import Popup from './Popup/Popup';
import * as pageActions from '../Actions/pageActions';
import * as constants from '../Constants/';


class App extends PureComponent {

  componentDidMount() {
    setTimeout(() => {
      MAIN_NODES.body.classList.add(constants.APP_READY_CSS_CLASS);
    }, 500);

  }

  render() {

    const {
      buttonClickedText,
      popupContent,
    } = this.props.appState;

    const {
      testClick,
      proceedPopup,
    } = this.props.pageActions;

    return (
      <div className='app'>
        <p>
          {buttonClickedText}
        </p>
        <Test testClick={testClick}
              proceedPopup={proceedPopup} />
        <Popup popupContent={popupContent}
               proceedPopup={proceedPopup}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.application,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)