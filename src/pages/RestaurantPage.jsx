import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from "react-bootstrap"
import useGetRestaurant from "../hooks/useGetRestaurant"


const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurant, loading } = useGetRestaurant(id)

      {loading && <p>Loading...</p>}

    console.log("RESTAURANGEN" + restaurant.restaurantName );

  return (
      <>

        <Container>
          <h1>Restaurang</h1>
          <h2>{restaurant.restaurantName}</h2>
          <h3>Type: {restaurant.restaurantType}</h3>
          <h3>Offer: {restaurant.restaurantOffer}</h3>
        </Container>
      </>
  )
}

export default RestaurantPage
