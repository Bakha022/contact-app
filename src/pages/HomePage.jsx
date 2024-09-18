import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import { v4 } from 'uuid'

import FilterComponent from '../components/FilterComponent'
import FormComponent from '../components/FormComponent'
import TabsComponent from '../components/TabsComponent'
import TodoFooter from '../components/TodoFooter'

export default class HomePage extends Component {
	state = {
		todos: JSON.parse(localStorage.getItem('todos')) || [],
		name: '',
		lastName: '',
		phone: '',
		category: 'family',
		isValideted: false,
		selected: null,
		search: '',
		filterCategory: 'all',
		sort: '',
	}
	render() {
		const {
			todos,
			isValideted,
			name,
			lastName,
			phone,
			category,
			selected,
			search,
			filterCategory,
			sort,
		} = this.state

		const submit = e => {
			e.preventDefault()

			this.setState({ isValideted: true })

			if (e.currentTarget.checkValidity()) {
				const todo = {
					name,
					lastName,
					phone,
					category,
					favorite: false,
					id: v4(),
				}
				let newTodos

				if (selected === null) {
					newTodos = [...todos, todo]
					this.setState({
						todos: newTodos,
						name: '',
						lastName: '',
						phone: '',
						category: 'family',
						isValideted: false,
					})

					toast.success('Added successfully')
				} else {
					newTodos = todos.map(item => (item.id == selected ? todo : item))
					this.setState({
						todos: newTodos,
						name: '',
						lastName: '',
						phone: '',
						category: 'family',
						isValideted: false,
						selected: null,
					})
					toast.success('Contact Update')
				}
				localStorage.setItem('todos', JSON.stringify(newTodos))
			} else {
				toast.error('Pleace Fill!')
				this.setState({ isValideted: true })
			}
		}

		const handleValue = e => {
			this.setState({ [e.target.id]: e.target.value })
		}

		const toDoFormProps = {
			handleValue,
			submit,
			isValideted,
			name,
			lastName,
			phone,
			category,
			selected,
		}

		const handleFavorite = (id, favorite) => {
			const newTodos = todos.map(todo =>
				todo.id == id ? { ...todo, favorite: favorite } : { ...todo }
			)

			localStorage.setItem('todos', JSON.stringify(newTodos))
			this.setState({ todos: newTodos })
		}

		const deleteTodo = id => {
			const newTodos = todos.filter(item => item.id !== id)
			localStorage.setItem('todos', JSON.stringify(newTodos))
			this.setState({ todos: newTodos })
			toast.error('Contact deleted')
		}

		const editTodo = id => {
			const todoFound = todos.find(todo => todo.id === id)
			this.setState({ ...todoFound, selected: id })
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}

		const handleSearch = e => {
			this.setState({ search: e.target.value })
		}
		const handleCategory = e => {
			this.setState({ filterCategory: e.target.value })
		}

		const sortBy = e => {
			this.setState({ sort: e.target.value })
		}

		const filterPorops = {
			search,
			handleSearch,
			filterCategory,
			handleCategory,
			sort,
			sortBy,
		}

		const resultTodo = todos
			.filter(item =>
				item.name.toLowerCase().includes(search.toLowerCase().trim())
			)
			.filter(item =>
				filterCategory == 'all' ? true : item.category == filterCategory
			)

		const sortedTodos =
			sort === 'A-Z'
				? [...resultTodo].sort((a, b) => a.name.localeCompare(b.name))
				: sort === 'Z-A'
				? [...resultTodo].sort((a, b) => b.name.localeCompare(a.name))
				: resultTodo

		const data = {
			todos: sortedTodos,
			handleFavorite,
			deleteTodo,
			editTodo,
		}
		return (
			<Container>
				<h1 className='text-center my-4'>Contact App</h1>
				<FormComponent {...toDoFormProps} />
				<FilterComponent {...filterPorops} />
				<TabsComponent {...data} />
				<TodoFooter />
				<ToastContainer />
			</Container>
		)
	}
}
