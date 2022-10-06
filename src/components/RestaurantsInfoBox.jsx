import { Card } from "react-bootstrap"
import mapAPI from "../services/mapAPI"


const RestaurantsInfoBox = ({restaurant, userPosition, onClose}) => {

    console.log("place is: ", restaurant)

    return (
        <Card>
            <Card.Header>{restaurant.restaurantName}</Card.Header>

			<a href={mapAPI.getDirections(userPosition, restaurant.coordinates)} target='_blank'>Directions to {restaurant.restaurantName}</a>
        </Card>

    )
}

export default RestaurantsInfoBox