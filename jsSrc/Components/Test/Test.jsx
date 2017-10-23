import React from 'react';
import PopupTestContent from '../Popup/PopupTestContent';

export default function Test(props) {

  const onButtonClick = (event) => {
    event.preventDefault();
    props.testClick(event.target.textContent);
  };

  const onPopupButtonClick = (event) => {
    event.preventDefault();
    props.proceedPopup(<PopupTestContent />);
  };

  return (
    <div>
      <p>
        ТЕСТОВЫЙ компонент
      </p>
      <ul>
        <li>
          <a href='#'
           onClick={onButtonClick}>
            кнопка1
          </a>
        </li>
        <li>
          <a href='#'
             onClick={onPopupButtonClick}>
            попап
          </a>
        </li>
      </ul>
    </div>
  )
}