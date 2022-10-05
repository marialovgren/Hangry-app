import { Card } from "react-bootstrap"


const FoodInfoBox = ({place, userPosition, onClose}) => {

    console.log("place is: ", place)

    return (
        <Card>
            <Card.Header>{place.restaurantName}</Card.Header>
        </Card>

    )
}

export default FoodInfoBox