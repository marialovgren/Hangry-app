import { ListGroup, Container, Button, Row, Col } from 'react-bootstrap';
import ResultsListItem from './ResultsListItem'

//visar bara resultaten och tar bara in de restauranger som är de som filtrerats ut:
const ResultsList = ({ restaurants }) => {
    
    
    return (
        <>
   {/*      {isLoading && (<p>Loading....</p>)}

        {isError && (<p>{error.message}</p>)} */}

        {restaurants && (
            <> 
                {/* skärmar större än mobil */}
                <Col xs={12} className="mt-2 resultsList d-none d-md-block">
                    <ListGroup>
                        {restaurants.map(restaurant => (
                            <ResultsListItem restaurant={restaurant} key={restaurant.id} />
                        ))}
                    </ListGroup>
                </Col>

                {/* mobilversion */}
                <Col className="mt-2 resultsListMobile fixed-bottom d-md-none">
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