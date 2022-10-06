import ListGroup from 'react-bootstrap/ListGroup'

const ResultsListItem = ({ restaurant, onRestaurantItemClick }) => {
	return (
		<ListGroup.Item
            action
            className="d-flex justify-content-between align-items-start"
			onClick={() => {onRestaurantItemClick(restaurant)}}
                >
            <div>
                <div className="fw-bold">
                {restaurant.restaurantName}
                </div>
                <p>{restaurant.restaurantAddress}</p>
                <span className="smallFont">{restaurant.restaurantCuisine}</span> <span className="bold-font">|</span> <span className="smallFont">{restaurant.restaurantType}</span> <span className="bold-font">|</span> <span className="smallFont">{restaurant.restaurantOffer}</span>
            </div>
        </ListGroup.Item>
	)
}

export default ResultsListItem

