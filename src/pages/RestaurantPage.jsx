/* import AdminNavigation from "../components/NavigationAdmin" */
import { Container, Row, Col, Button } from "react-bootstrap"
import { useAuthContext } from "../contexts/AuthContext" //
import RestaurantForm from '../components/RestraurantForm'
import useGetAllRestaurants from "../hooks/useGetAllRestaurants" //get all restaurants from collection "restuarnts"
import { useMemo } from 'react'
import SortableTable from "../components/SortableTable" //sorts

const RestaurantPage = () => {
    const { data: restaurants, error, isError, isLoading } = useGetAllRestaurants("restaurants") //gets all restaurants from collection

    const { showRestaurantForm, setShowRestaurantForm } = useAuthContext() 

    const columns = useMemo(() => {
        return [
            {
                Header: 'Namn',
                accessor: 'restaurantName', 
            },
            {
                Header: 'Gatuadress',
                accessor: 'restaurantStreetName', 
            },
            {
                Header: 'Nummer',
                accessor: 'restaurantStreetNumber', 
            },
            {
                Header: 'Zip Code',
                accessor: 'restaurantZipCode', 
            },
            {
                Header: 'Ort',
                accessor: 'restaurantCity', 
            },
            {
                Header: 'Telefon',
                accessor: 'restaurantTelephone', 
            },
            {
                Header: 'Description',
                accessor: 'restaurantDescription', 
            },
            {
                Header: 'Cuisine',
                accessor: 'restaurantCuisine', 
            },
            {
                Header: 'Type of place',
                accessor: 'restaurantType', 
            },
            {
                Header: 'Offers',
                accessor: 'restaurantOffer', 
            },
            {
                Header: 'Website',
                accessor: 'restaurantWebsite', 
            },
            {
                Header: 'Facebook',
                accessor: 'restaurantFacebook', 
            },
            {
                Header: 'Instagram',
                accessor: 'restaurantInstagram', 
            }
        ]
    }, [])

    console.log("restaurants: ", restaurants)

	return (
        <>
            {/* <AdminNavigation admin={users} /> */} {/* send admin as prop to Navbar so it can be displayed in Dropdown later */}

            <Container>
            <Container>
				<h1>Alla restauranger:</h1>

				{isLoading && (<p>Loading....</p>)}

				{isError && (<p>{error.message}</p>)}

				{restaurants && <SortableTable columns={columns} data={restaurants} />}

			</Container>
                <Row className="d-flex justify-content-start p-3">
    
                    {/*Create Restaurant Button*/}
                    <Col> 
                        <Button 
                            className="mb-2" 
                            active 
                            variant="dark" 
                            onClick={ () =>
                                setShowRestaurantForm(true) 
                            }
                        >
                            Skapa ny restaurang
                        </Button>
                    </Col>
                </Row>
            </Container>
            
            {showRestaurantForm &&
                <RestaurantForm showRestaurantForm={showRestaurantForm} setShowRestaurantForm={setShowRestaurantForm}
            />}
		</>	
	)
}

export default RestaurantPage
