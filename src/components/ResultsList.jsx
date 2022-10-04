import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import useGetAllRestaurants from "../hooks/useGetAllRestaurants"
import ResultsListItem from './ResultsListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ResultsList = ({city, setCity}) => {
    const { data: restaurants, error, isError, isLoading } = useGetAllRestaurants("restaurants")
    
    
    return (
        <>
        {isLoading && (<p>Loading....</p>)}

        {isError && (<p>{error.message}</p>)}

        {restaurants && (
            <div className="resultList">
                {
                    city && (
                        <Button variant='outline-primary'>{city}
                            <FontAwesomeIcon icon={faXmark} /* onClick={resetCity} */ />
                        </Button>
                    )
                }
				<ListGroup>
                    {restaurants.map(restaurant => (
                        <ResultsListItem restaurant={restaurant} key={restaurant.id} />
                    ))}
                </ListGroup>	
			</div>
        )}
        </>
    )
}

export default ResultsList