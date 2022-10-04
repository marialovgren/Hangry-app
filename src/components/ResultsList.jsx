import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import useGetAllRestaurants from "../hooks/useGetAllRestaurants"
import ResultsListItem from './ResultsListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ResultsList = ({ city, resetCity, restaurants }) => {
    
    console.log("City is: ", city)
    
    return (
        <>
   {/*      {isLoading && (<p>Loading....</p>)}

        {isError && (<p>{error.message}</p>)} */}

        {restaurants && (
            <div className="resultList">
                <Button variant='outline-primary'>
                    <FontAwesomeIcon icon={faXmark} onClick={resetCity}  />
                </Button>
               
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