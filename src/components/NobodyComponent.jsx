import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class NobodyComponent extends Component {
	render() {
		return (
			<Alert className='w-100 text-center text-black py-5 fs-2 rounded-3'>
				Nobody
			</Alert>
		)
	}
}
