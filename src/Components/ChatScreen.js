import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
	margin: 10px;
	height: 90vh;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`

const MessageContainer = styled.div`
	display: flex;
	height: 100%;
	margin: 10px;
	width: 40%;
	flex-direction: column;
	background-color: rgb(243, 243, 243);
	overflow: auto;
`
const MessageDiv = styled.div`
	display: flex;
	justify-content: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
`
const Message = styled.div`
	border: 1px solid green;
	border-top-left-radius: ${(props) => (props.isMe ? '20px' : '0px')};
	border-top-right-radius: ${(props) => (props.isMe ? '0px' : '20px')};
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
	min-width: 50px;
	text-align: ${(props) => (props.isMe ? 'right' : 'left')};
`
function ChatScreen({ data, message, setMessage, sendMessage, user }) {
	const history = useHistory()
	return (
		<Container>
			<MessageContainer>
				{data.map((message, idx) => (
					<MessageDiv key={idx} isMe={message.user === user}>
						<Message isMe={message.user === user}>
							<p className='user-message'>{message.message}</p>
							<p className='user-name'>{message.user}</p>
						</Message>
					</MessageDiv>
				))}
			</MessageContainer>
			<Form className='bs-form' onSubmit={sendMessage}>
				<Form.Group>
					<Form.Control
						type='text'
						placeholder={`Hi ${user}, Start Messaging`}
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<Button type='submit' className='send-btn'>
						Send
					</Button>
					<Button
						onClick={() => {
							localStorage.clear()
							history.push('/')
						}}
						className='send-btn'>
						Logout
					</Button>
				</Form.Group>
			</Form>
		</Container>
	)
}

export default ChatScreen
