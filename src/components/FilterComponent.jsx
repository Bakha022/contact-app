import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default class FilterComponent extends Component {
	render() {
		const {
			search,
			handleSearch,
			filterCategory,
			handleCategory,
			sort,
			sortBy,
		} = this.props

		return (
			<div className='my-4'>
				<InputGroup>
					<Form.Control
						value={search}
						onChange={handleSearch}
						placeholder='Searching...'
					/>
					<InputGroup.Text id='basic-addon2'>
						<Form.Select value={filterCategory} onChange={handleCategory}>
							<option value='all'>All</option>
							<option value='family'>Family</option>
							<option value='friends'>Friends</option>
							<option value='relatives'>Relatives</option>
							<option value='other'>Other</option>
						</Form.Select>
					</InputGroup.Text>
					<InputGroup.Text id='basic-addon2'>
						<Form.Select value={sort} onChange={sortBy}>
							<option value={""}>Sort by</option>
							<option value='A-Z'>A-Z</option>
							<option value='Z-A'>Z-A</option>
						</Form.Select>
					</InputGroup.Text>
				</InputGroup>
			</div>
		)
	}
}
