import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
import '../index.css'




function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
      >
        <FontAwesomeIcon icon={faCircleCheck} className="saveColor"/>
      </span>
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      
      <span className="Icon Icon-delete"
            onClick={props.onDelete}
      >
        <FontAwesomeIcon icon={faTrash} className="trashColor"/>
      </span>
    </li>

    
  );
}

export { TodoItem };