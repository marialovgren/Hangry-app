import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const SignupPage = () => {
	const emailRef = useRef()
	const displayNameRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [photo, setPhoto] = useState(false)
	const { signup } = useAuthContext()
	const navigate = useNavigate()

	const handleFileChange = (e) => {
		if (!e.target.files.length) {
			setPhoto(null)
			return
		}
		// Lägga till så att man måste lägga in en profilbild för att kunna skapa konto!!!

		setPhoto(e.target.files[0])
		console.log("File changed!", e.target.files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords does not match")
		}

		setError(null);

		try {
			setLoading(true)

			await signup(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value, photo)

			navigate('/')
		} catch (err) {
			setError(err.message)
			setLoading(false)
		}
	}

	return (
		<Container className="py-3 center-y">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title className="mb-3">Registrera dig för att bli administratör</Card.Title>

							{error && (<Alert variant="danger">{error}</Alert>)}

							<Form onSubmit={handleSubmit}>

								<Form.Group id="displayName" className="mb-3">
									<Form.Label>Namn *</Form.Label>
									<Form.Control type="text" ref={displayNameRef} required />
								</Form.Group>

								<Form.Group id="email" className="mb-3">
									<Form.Label>Email *</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Form.Group id="photo" className="mb-3">
									<Form.Label>Profilbild</Form.Label>
									<Form.Control type="file" onChange={handleFileChange} />
									<Form.Text>
										{
											photo
												? `${photo.name} (${Math.round(photo.size/1024)} kB)`
												: 'You need a profilepicture🎅🏽'
										}
									</Form.Text>
								</Form.Group>

								<Form.Group id="password" className="mb-3">
									<Form.Label>Lösenord *</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>

								<Form.Group id="password-confirm" className="mb-3">
									<Form.Label>Bekräfta lösenord *</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} required />
								</Form.Group>
								<p>* = obligatoriska fält</p>

								<Button disabled={loading} type="submit">Skapa konto</Button>
							</Form>
						</Card.Body>
					</Card>

					<div className="text-center mt-3">
						Har du redan ett konto? <Link to="/login">Logga in</Link>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default SignupPage