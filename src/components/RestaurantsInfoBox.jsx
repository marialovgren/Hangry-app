import { Card } from "react-bootstrap"


const RestaurantsInfoBox = ({place, userPosition, onClose}) => {

    console.log("place is: ", place)

    return (
        <Card>
            <Card.Header>{place.restaurantName}</Card.Header>
        </Card>

    )
}

export default RestaurantsInfoBox