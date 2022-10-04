import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const TodoListItem = ({ restaurant }) => {
	return (
		<ListGroup.Item
			action
			as={Link}
			to={`/restaurants/${restaurant.id}`}
		>
			<span>{restaurant.restaurantName}</span>
		</ListGroup.Item>
	)
}

export default TodoListItem

