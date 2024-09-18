import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class FormComponent extends Component {
	render() {
		const { isValideted, name, lastName, phone, category, submit, handleValue, selected} = this.props

		return (
			<Form
				noValidate
				validated={isValideted}
				onSubmit={submit}
				className='w-50 mx-auto'
			>
				<Form.Group className='mb-3' controlId='name'>
					<Form.Label>Fist Name</Form.Label>
					<Form.Control
						required
						value={name}
						onChange={handleValue}
						type='text'
						placeholder='Fist Name'
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>
						Please fill!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className='mb-3' controlId='lastName'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						required
						value={lastName}
						onChange={handleValue}
						type='text'
						placeholder='Last Name'
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>
						Please fill!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className='mb-3' controlId='phone'>
					<Form.Label>Phone number</Form.Label>
					<Form.Control
						required
						value={phone}
						onChange={handleValue}
						type='text'
						placeholder='Phone number'
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>
						Please fill!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className='mb-3' controlId='category'>
					<Form.Label>Choose relationship</Form.Label>
					<Form.Select required value={category} onChange={handleValue}>
						<option value='family'>Family</option>
						<option value='friends'>Friends</option>
						<option value='relatives'>Relatives</option>
						<option value='other'>Other</option>
					</Form.Select>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>
						Please fill!
					</Form.Control.Feedback>
				</Form.Group>

				<Button className='w-100' type='submit'>
					{selected == null ? 'Add' : 'Update'} Contact
				</Button>
			</Form>
		)
	}
}
