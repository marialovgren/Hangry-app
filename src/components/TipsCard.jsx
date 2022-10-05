import { Card, Col, Row, ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const TipsCard = ({tips}) => {

    const navigate = useNavigate()

	return (
		<>
			<Row className="d-flex justify-content-start p-3">
				<Col xs={10}>
					<h2>{tips.restaurantName}</h2>
				</Col>
				<Col xs={2}>
					<Button className="mb-2" active variant="dark" onClick={() => navigate(-1)}>Back</Button>
				</Col>
			</Row>

			<Row className="d-flex justify-content-center">
				<Col xs={10}>
					<Card key={tips.id} className="my-3">
						<ListGroup className="list-group-flush">
                            {tips.restaurantAdress && (
                                <ListGroup.Item><span className="bold-font">Adress:</span> {tips.restaurantAdress}</ListGroup.Item>
                            )}
							{tips.restaurantComment && (
                                <ListGroup.Item><span className="bold-font">Kommentar:</span> {tips.restaurantComment}</ListGroup.Item>
                            )}
                            <ListGroup.Item><span className="bold-font">Status:</span> {tips.completed ? 'Avklarad' : 'Ej Avklarad'}</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>

			</Row>
		</>
	)
}

export default TipsCard



