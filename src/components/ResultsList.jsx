import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import ResultsListItem from './ResultsListItem'


const ResultsList = ({ city, restaurants }) => {
    
    console.log("City is: ", city)
    
    return (
        <>
   {/*      {isLoading && (<p>Loading....</p>)}

        {isError && (<p>{error.message}</p>)} */}

        {restaurants && (
            <> {/* fixed-bottom endast vid liten skärm */}
                
                <Col xs={12} className="mt-2">
                    <ListGroup>
                        {restaurants.map(restaurant => (
                            <ResultsListItem restaurant={restaurant} key={restaurant.id} />
                        ))}
                    </ListGroup>
                </Col>
			</>
        )}
        </>
    )
}

export default ResultsList