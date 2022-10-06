import { ListGroup, Form, Button, Row, Col } from 'react-bootstrap';
import ResultsListItem from './ResultsListItem'

//visar bara resultaten och tar bara in de restauranger som är de som filtrerats ut:
const ResultsList = ({ restaurants, onRestaurantItemClick }) => {
    
    
    return (
        <>
            {/* Mobilversion */}
            <Col className="mt-2 resultsListMobile fixed-bottom d-md-none">
                <ListGroup className="border border-3"> 
                    {restaurants.map(restaurant => (
                        <ResultsListItem restaurant={restaurant} />   
                    ))}
                </ListGroup>
            </Col>

            {/* Desktopversion */}
            <Col xs={12} className="mt-2 mb-5 resultsList d-none d-md-block">
                <ListGroup>
                    {restaurants.map(restaurant => (
                        <ResultsListItem restaurant={restaurant} onRestaurantItemClick={onRestaurantItemClick} />   
                    ))}
                </ListGroup>
            </Col>
        </>
    )
}

export default ResultsList