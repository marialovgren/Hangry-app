import CreateTipsForm from '../components/CreateTipsForm'
import { Container, Row, Col, Card } from 'react-bootstrap'

const TipsPage = () => {

    return (
        <Container className="py-3 center-y">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-3">Tips</Card.Title>
                            <Card.Text>Har du tips på ett matställe som saknas på kartan?</Card.Text>
                            
                            <CreateTipsForm />

						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
    )
}

export default TipsPage