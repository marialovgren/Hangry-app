import { doc, collection, setDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert, Image } from 'react-bootstrap'

const TipsPage = () => {
    const [tips, setTips] = useState([])
    const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("About to send tips", e)

       /*  setError(null)

        try {
            setLoading(true)


        } */
    }

    return (
        <Container className="py-3 center-y">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title className="mb-3">Tips</Card.Title>
                            <Card.Text>Har du tips på ett matställe som saknas på kartan?</Card.Text>

							{error && (<Alert variant="danger">{error}</Alert>)} 

							<Form onSubmit={handleSubmit}>

								<Form.Group id="restaurantName" className="mb-3">
									<Form.Label>Restaurang</Form.Label>
									<Form.Control type="restaurantName" /* ref={displayNameRef} */ required />
								</Form.Group>

								<Form.Group id="restaurantAdress" className="mb-3">
									<Form.Label>Adress</Form.Label>
									<Form.Control type="restaurantAdress" /* ref={emailRef} */ />
								</Form.Group>

                                <Form.Group id="comment" className="mb-3">
                                    <Form.Label>Kommentar?</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <div className="d-flex justify-content-between">
								    <Button disabled={loading}  type="submit">Skicka tips</Button>
                                    <Button disabled={loading} type="cancel">Avbryt</Button>
                                </div>
							</Form>

						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
    )
}

export default TipsPage