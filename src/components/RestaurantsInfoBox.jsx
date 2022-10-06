import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import mapAPI from "../services/mapAPI"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



const RestaurantsInfoBox = ({restaurant, userPosition, onClose}) => {

    console.log("place is: ", restaurant)

    return (
        <Card>
            <Card.Header as="h5">
				{restaurant.restaurantName}
				<Button onClick={onClose} className="closeButton"><FontAwesomeIcon icon={faXmark}/></Button>
			</Card.Header>
			<Card.Title>
				{restaurant.restaurantCity + ', ' + restaurant.restaurantAddress}
			</Card.Title>
			<Card.Text>
				{restaurant.restaurantDescription}
			</Card.Text>
			<Card.Subtitle>
				{restaurant.restaurantCuisine + ' | ' +  restaurant.restaurantType + ' | ' + restaurant.restaurantOffer}
			</Card.Subtitle>
			{restaurant.restaurantEmail && (
				<Card.Text>
					{restaurant.restaurantEmail}
				</Card.Text>
			)}
			{restaurant.restaurantTelephone && (
				<Card.Text>
					{restaurant.restaurantTelephone}
				</Card.Text>
			)}
			{restaurant.restaurantWebsite &&(
				<Card.Link>
					{restaurant.restaurantWebsite}
				</Card.Link>
			)}
			{restaurant.restaurantFacebook && (
				<Card.Link>
					{restaurant.restaurantFacebook}
				</Card.Link>
			)}
			{restaurant.restaurantInstagram && (
				<Card.Link>
					{restaurant.restaurantInstagram}
				</Card.Link>
			)}
			<Card.Body>
				<Card.Link 
					href={`https://www.google.com/maps/dir/${userPosition.lat},${userPosition.lng}/${restaurant.restaurantName},+${restaurant.restaurantAddress}+${restaurant.restaurantCity}`} target='_blank'>Directions to {restaurant.restaurantName}
				</Card.Link>
			</Card.Body>
        </Card>

    )
}

export default RestaurantsInfoBox