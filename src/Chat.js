import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import ChatScreen from './Components/ChatScreen'

function Chat() {
	const user = localStorage.getItem('userName')
	const [message, setMessage] = useState('')
	const [data, setData] = useState([])
	const ws = useRef()

	useEffect(() => {
		ws.current = new WebSocket('ws://localhost:8081')
		ws.current.onopen = () => console.log('connected to websocket')
		ws.current.onmessage = (event) => {
			const msg = JSON.parse(event.data)
			setData((_data) => [..._data, msg])
		}
	}, [])
	const sendMessage = (e) => {
		e.preventDefault()
		console.log(user)
		setData((_data) => [..._data, { message: message, user: user }])
		ws.current.send(JSON.stringify({ user: user, message: message }))
		setMessage('')
	}
	return (
		<div className='container'>
			<ChatScreen
				user={user}
				data={data}
				message={message}
				setMessage={setMessage}
				sendMessage={sendMessage}
			/>
		</div>
	)
}

export default Chat
