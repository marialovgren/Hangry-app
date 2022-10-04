import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import useGetAllRestaurants from "../hooks/useGetAllRestaurants"
import ResultsListItem from './ResultsListItem'

const ResultsList = () => {
    const { data: restaurants, error, isError, isLoading } = useGetAllRestaurants("restaurants")
    
    return (
        <>
        {isLoading && (<p>Loading....</p>)}

        {isError && (<p>{error.message}</p>)}

        {restaurants && (
            <div className="resultList">
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