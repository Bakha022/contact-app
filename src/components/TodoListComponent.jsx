import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export default class TodoListComponent extends Component {
	render() {
		const {
			name,
			lastName,
			phone,
			category,
			favorite,
			id,
			handleFavorite,
			deleteTodo,
			editTodo,
		} = this.props

		const categoryColor = {
			family: 'danger',
			friends: 'primary',
			relatives: 'info',
			other: 'success',
		}

		return (
			<Alert
				variant='primary'
				className='d-flex align-items-center justify-content-between py-3 flex-wrap'
			>
				<div>
					<p className='m-0 my-2'>
						{name} {lastName}{' '}
						<span className={`text-${categoryColor[category]}`}>
							{category}
						</span>
					</p>
					<p className='m-0'>{phone}</p>
				</div>
				<div className='icons d-flex align-items-center gap-3'>
					{favorite ? (
						<FaHeart onClick={() => handleFavorite(id, false)} size={24} />
					) : (
						<FaRegHeart onClick={() => handleFavorite(id, true)} size={24} />
					)}
					<Button onClick={() => editTodo(id)} variant='primary'>
						Edit
					</Button>
					<Button onClick={() => deleteTodo(id)} variant='danger'>
						Delete
					</Button>
				</div>
			</Alert>
		)
	}
}
