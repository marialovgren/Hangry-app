import { Button, Card, ListGroup, Row, Col } from "react-bootstrap"
import mapAPI from "../services/mapAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const RestaurantsInfoBox = ({restaurant, userPosition, onClose}) => {

    console.log("place is: ", restaurant)

    return (
		<div>
			<Card className="infoBox">
				<Card.Body>
					<Row>
						<Col>
							<Card.Title xs={10}>
								{restaurant.restaurantName}
							</Card.Title>
						</Col>
						<Col xs={2} className="d-flex justify-content-end align-items-center">
							<Button onClick={onClose} size="sm" className="closeButton"><FontAwesomeIcon icon={faXmark}/></Button>
						</Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Card.Subtitle>
								{restaurant.restaurantAddress}, {restaurant.restaurantCity}
							</Card.Subtitle>
						</Col>
						<Col xs={12}>
							<Card.Text>
								{restaurant.restaurantDescription}
							</Card.Text>
						</Col>
								<Col xs={12}>
									<span className="smallFont">{restaurant.restaurantCuisine}</span> <span className="bold-font">|</span> <span className="smallFont">{restaurant.restaurantType}</span> <span className="bold-font">|</span> <span className="smallFont">{restaurant.restaurantOffer}</span>
								</Col>
							</Row>
							<Row>
								<Col>
									<ListGroup horizontal>
										{restaurant.restaurantFacebook && (
											<ListGroup.Item>
												<Card.Link href={restaurant.restaurantFacebook}>Facebook</Card.Link>
											</ListGroup.Item>
										)}
										{restaurant.restaurantWebsite && (
											<ListGroup.Item>
												<Card.Link href={restaurant.restaurantWebsite}>Hemsida</Card.Link>
											</ListGroup.Item>
										)}
										{restaurant.restaurantInstagram && (
											<ListGroup.Item>
												<Card.Link href={restaurant.restaurantInstagram}>Instagram</Card.Link>
											</ListGroup.Item>
										)}
									</ListGroup>
								</Col>
								<Col>
									<ListGroup horizontal>
										{restaurant.restaurantEmail && (
											<ListGroup.Item>{restaurant.restaurantEmail}</ListGroup.Item>
										)}
										{restaurant.restaurantTelephone && (
											<ListGroup.Item>{restaurant.restaurantTelephone}</ListGroup.Item>
										)}
									</ListGroup>
								</Col>
							</Row>
							<Row>
								<Col>
								<Card.Text>
							
										<Card.Link href={mapAPI.getDirections(userPosition, restaurant.coordinates)} target='_blank'>Directions to {restaurant.restaurantName}</Card.Link>
							
								</Card.Text>
								</Col>
							</Row>	
					</Card.Body>
			</Card>
		</div>
    )
}

export default RestaurantsInfoBox