import React from 'react'



export default class TodoListHeader extends React.Component{
		render(){
			return(
				<table>
					<thead>
						<tr>
							<th>Task</th>
							<th>Action</th>
						</tr>
					</thead>
				</table>

				);
		}
}