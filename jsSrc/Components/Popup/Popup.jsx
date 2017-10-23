/**
 * Компонент попапа
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Popup extends Component {

  onCloseClick = (event) => {
    event.preventDefault();
    this.props.proceedPopup(null);
  };

  render() {

    const {
      popupContent,
    } = this.props;

    return (
      <div className={`popup ${popupContent ? 'popup_loaded' : ''}`}
           id='popup'>
        <a href='#'
           onClick={this.onCloseClick}>
          Закрыть попап
        </a>
        {popupContent}
      </div>
    )
  }
}

Popup.propTypes = {
  popupContent: PropTypes.object,
};
