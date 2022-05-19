import React from 'react';
import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa-clipboard-check } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      <FontAwesomeIcon icon={fa-clipboard-check} />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
      <FontAwesomeIcon icon="fa-solid fa-octagon-xmark" />
      </span>
    </li>
  );
}

export { TodoItem };