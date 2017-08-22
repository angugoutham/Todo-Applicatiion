import React from 'react'
import TodosListHeader from './todo-list-header'
import _ from 'lodash';
import TodoListItem from './todos-list-item'


export default class TodoList extends React.Component{
		renderItems()
		{
			const props= _.omit(this.props,'todos');
			return _.map(this.props.todos,(todo,index)=> <TodoListItem key={index}
					 {...todo} {...props}
			/>);
				// ...todo equal to task={todo.task} isCompleted={todo.isCompleted}///


		}

		render(){
			console.log(this.props.todos);
			return(
				<table>
					<TodosListHeader />
					<tr>
					{this.renderItems()}
					</tr>
				</table>

				);
		}
}