import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{

	constructor(props) {
        super(props);
    	}

	render() {
        const listTodo = this.props.todoList.map((tod) =>
            <li>
                <Todo text={tod.text}  priority = {tod.priority}   dueDate = {tod.dueDate}/>
            </li>
	    );
        
        return  (
		<ul>{listTodo}</ul>
               );
        
    }


}