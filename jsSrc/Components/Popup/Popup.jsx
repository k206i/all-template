/**
 * Компонент попапа
 */


import React, { Component } from 'react';

export default class Popup extends Component {

  componentDidMount() {
    setTimeout(() => {
      //document.getElementById('popup').classList.add('popup_loaded');
    }, 10);
  }

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