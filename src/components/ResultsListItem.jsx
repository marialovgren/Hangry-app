import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const ResultListItem = ({ restaurant }) => {
	return (
		<ListGroup.Item
			action
			as={Link}
			to={`/restaurants/${restaurant.id}`}
            className="d-flex justify-content-between align-items-start"
		>
            <div className="me-auto">
                <div className="fw-bold">
                {restaurant.restaurantName}
                </div>
                <p>{restaurant.restaurantAddress}</p>
                <span>{restaurant.restaurantCuisine} | {restaurant.restaurantType} | {restaurant.restaurantOffer}</span>
            </div>
		</ListGroup.Item>
	)
}

export default ResultListItem

