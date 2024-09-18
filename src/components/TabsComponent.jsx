import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import TodoListComponent from './TodoListComponent'

export default class TabsComponent extends Component {
	state = {
		key: 'all',
	}
	render() {
		const { todos, handleFavorite, deleteTodo, editTodo } = this.props
		const { key } = this.state

		const favoriteCount = todos?.filter(item => item.favorite).length || 0
		
		return (
			<Tabs fill defaultActiveKey='all' className='mb-3' variant='pills'>
				<Tab
					onClick={() => this.setState({ key: 'all' })}
					eventKey='all'
					title='All'
				>
					{todos?.map((item, index) => (
						<TodoListComponent
							deleteTodo={deleteTodo}
							handleFavorite={handleFavorite}
							key={index}
							editTodo={editTodo}
							{...item}
						/>
					))}
				</Tab>
				<Tab
					onClick={() => this.setState({ key: 'favorites' })}
					eventKey='favorites'
					title={`Favorites(${favoriteCount})`}
				>
					{todos
						?.filter(item => item.favorite)
						.map((item, index) => (
							<TodoListComponent
								deleteTodo={deleteTodo}
								handleFavorite={handleFavorite}
								key={index}
								editTodo={editTodo}
								{...item}
							/>
						))}
				</Tab>
			</Tabs>
		)
	}
}
