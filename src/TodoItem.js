import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardCheck , faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {

const onComplete = ()=>{
  alert(`ya completaste la ${props.text}`)
}
const onDelete = ()=>{
  alert(`Borraste la tarea ${props.text}`)
}

  return (
    <li className="TodoItem">
      <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      <FontAwesomeIcon icon={faClipboardCheck}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
      <FontAwesomeIcon icon={faCircleXmark}/>
      </span>
    </li>
  );
}

export { TodoItem };