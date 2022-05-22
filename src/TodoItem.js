import React from 'react';
import './TodoItem.css';

//de esta forma se importa FontAwesome para poder utilizar en react
//previo hay que instalar
// npm i --save @fortawesome/fontawesome-svg-core 
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardCheck , faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>
      <FontAwesomeIcon icon={faClipboardCheck}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span  className="Icon Icon-delete"
             onClick={props.onDelete}  >
      <FontAwesomeIcon icon={faCircleXmark}/>
      </span>
    </li>
  );
}

export { TodoItem };