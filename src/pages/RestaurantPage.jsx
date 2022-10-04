import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import UpdateRestaurantForm from "../components/UpdateRestaurantForm"
import { useAuthContext } from "../contexts/AuthContext"
import useGetRestaurant from "../hooks/useGetRestaurant"

const RestaurantPage = () => {
  const { showUpdateRestaurantForm, setShowUpdateRestaurantForm } = useAuthContext()  //to set Form to update restaurant to show or hide
  const { id } = useParams() //get id
  const { data: restaurant, error, isError, isLoading } = useGetRestaurant(id) //get specific restaurant document from the restaurants collection

  const onRestaurantUpdated = () => { //kör funktionen, vilket döljer formuläret
		setShowUpdateRestaurantForm(false)
	}

 {isLoading && <p>Loading...</p>}

  console.log("RESTAURANGEN" + restaurant.restaurantName );

  return (
      <>
        <Container>
          <h1>Restaurang</h1>

          {isLoading && (<p>Loading....</p>)}

          {isError && (<p>{error.message}</p>)}

          <h2>{restaurant.restaurantName}</h2>
          <h3>Type: {restaurant.restaurantType}</h3>
          <h3>Offer: {restaurant.restaurantOffer}</h3>

          <Row className="d-flex justify-content-start p-3">
    
              {/*UPDATE Restaurant Button*/}
              <Col> 
                  <Button 
                      className="mb-2" 
                      active 
                      variant="dark" 
                      onClick={ () =>
                          setShowUpdateRestaurantForm(!showUpdateRestaurantForm) 
                      }
                  >
                      Uppdatera restaurang
                  </Button>
              </Col>
          </Row>
        </Container>

        {/* Show Form to update restaurant when clicking button */}
        {showUpdateRestaurantForm &&
                <UpdateRestaurantForm 
                  showUpdateRestaurantForm={showUpdateRestaurantForm} setShowUpdateRestaurantForm={setShowUpdateRestaurantForm} onRestaurantUpdated={onRestaurantUpdated} 
                  restaurant={restaurant}
            />}
      </>
  )
}

export default RestaurantPage
