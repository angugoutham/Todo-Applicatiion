import React from 'react'
import TodosList from './todo-list'
import CreateToDo from './create-todo'


let todos = [ 
	{
		task: 'Go Home',
        isCompleted: true
	}


];


export default class App extends React.Component{
		constructor(props){
				super(props);

				this.state = { // binding this todo array with this class
					todos
				};

		}


		render(){
			console.log(todos.length);
			return(
				<div>
				<h1>React ToDos App </h1>
				<CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<TodosList todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
				</div>	

				);
		}
		createTask(task)
		{
			this.state.todos.push({
				task,
				isCompleted: false
			});
			// binding the new task from ui to Array
			this.setState({todos: this.state.todos});
		}

		toggleTask(task)
        {
        const foundTodo=_.find(this.state.todos,todo=> todo.task===task);
        foundTodo.isCompleted=!foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
        }

        saveTask(oldTask,newTask)
        {        const foundTodo=_.find(this.state.todos,todo=> todo.task===oldTask);

            foundTodo.task=newTask;
                this.setState({todos:this.state.todos});
        }
        deleteTask(taskToDelete)
        {
            _.remove(this.state.todos,todo=>todo.task===taskToDelete);
            this.setState({todos:this.state.todos});
        }
}