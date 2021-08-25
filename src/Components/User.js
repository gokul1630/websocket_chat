/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const User = () => {
	const history = useHistory()
	const [user, setUser] = useState('')
	useEffect(() => {
		const user = localStorage.getItem('userName')
		if (user) {
			history.push('/chat')
		} else {
			history.push('/')
		}
	}, [])
	const submit = (e) => {
		e.preventDefault()
		localStorage.setItem('userName', user)
		history.push('/chat')
	}
	return (

			<div className='user'>
				<Form onSubmit={submit}>
					<Form.Group className='mb-1'>
						<Form.Control
							type='text'
							placeholder='User Name'
							required
							value={user}
							onChange={(e) => setUser(e.target.value)}
						/>
					</Form.Group>
					<Button type='submit'>Enter Chat</Button>
				</Form>
			</div>

	)
}

export default User
