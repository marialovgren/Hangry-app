import { useState, useEffect } from 'react'
import SearchField from './SearchField'
import ResultsList from './ResultsList'
import { ListGroup, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import useGetQueryRestaurants from '../hooks/useGetQueryRestaurants'
import mapAPI from '../services/mapAPI'
import { Link } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({handleMapOnSubmit, coordinates, userPosition, restaurants, handleChangeRestaurants}) => {
    //open close form
    //const [open, setOpen] = useState(true)
 
    //States of what the user has filtered restaurant on, render list differently depending on state
    const [nameOrder, setNameOrder] = useState('asc') //orders it ascending by default. set orderBy funktion to read NameOrder and sort it by descending or ascending. 
    const [type, setType] = useState('no-filter')
    const [city, setCity] = useState('')
    const [querys, setQuerys] = useState({
        nameOrder,
        type,
        city,
    })

    //get Querys
    const { data, loading } = useGetQueryRestaurants(querys)


     //When user has submitted serach form
         const handleOnSubmit = async (address) => {

            // If no address has been given, abort
            if(!address) {
                return
            }
       
            setCity(await mapAPI.getSearchedCity(userPosition))

            handleMapOnSubmit(address)
        }


    useEffect( () => {
        console.log("order is " + nameOrder)
        console.log('querys.nameOrder',querys.nameOrder)

        const changeQuerys = async () => {
            setQuerys({
                nameOrder,
                type,
                city: await mapAPI.getSearchedCity(userPosition)
            })
        }
        changeQuerys()
    }, [nameOrder, type, city, userPosition] )

	useEffect(() => {
		const changeQueryCity = async () => {
			setCity(await mapAPI.getSearchedCity(userPosition))
		}
		changeQueryCity()
	}, [userPosition])

	useEffect(() => {
		handleChangeRestaurants(querys)
	}, [querys])

console.log("vad är" + restaurants)






    return (
        <>
            {/* Mobilversionen */}
            <div className="searchBoxWrapperMobile pt-2 px-2 d-md-none">
                <Row>
                    <Col>
                        <div className="searchBox d-flex flex-column">
                            <SearchField onSubmit={handleOnSubmit} /* setOpen={setOpen} */ setQuerys={setQuerys}/>
                            {city && (
								<div>
							        <span className="smallFont">Visar matställen i {city}</span>
						        </div>
							)}
                        </div>
                    </Col>
                
                    <Col>
                        <Form.Group 
                            as={Col} 
                            controlId="restaurantName" 
                            className="mb-3"
                        >  
                            <Form.Select   
                                onChange={(e) =>
                                    {setNameOrder(e.target.value)}} 
                                defaultValue={nameOrder}
                                className='form-select'
                                size="sm"
                            >
                                <option value='asc'>Stigande</option>
                                <option value='desc'>Fallande</option>
                            </Form.Select>  
                            <Form.Label>
                                <span className="smallFont"
                            >Sortera</span>
                            </Form.Label> 
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group 
                            as={Col} 
                            controlId="restaurantType" 
                            className="mb-3"
                        >  
                            <Form.Select   
                                onChange={(e) =>
                                    {setType(e.target.value)}} 
                                defaultValue={type}
                                className='form-select'
                                size="sm"
                            >
                                <option value='café'>Café</option>
                                <option value='restaurang'>Restaurang</option>
                                <option value='snabbmat'>Snabbmat</option>
                                <option value='kiosk-grill'>Kiosk/Grill</option>
                                <option value='foodtruck'>Foodtruck</option>
                            </Form.Select>   
                            <Form.Label>
                                <span className="smallFont"
                            >Typ</span>
                            </Form.Label>
                        </Form.Group>                           
                    </Col>

                    {restaurants && (
                        <ResultsList nameOrder={nameOrder} setNameOrder={setNameOrder} setType={setType} type={type} restaurants={restaurants} />
                    )}
                </Row>
            </div>
        
            {/* Desktopversion */}
            <div className="searchBoxWrapper p-2 d-none d-md-block">
                <Row>
                    <Col xs={12}>
                        <div className="searchBox d-flex flex-column">
                            <SearchField onSubmit={handleOnSubmit} /* setOpen={setOpen} */ setQuerys={setQuerys}/>
                            {city && (
								<div>
							        <span className="smallFont">Visar matställen i {city}</span>
						        </div>
							)}
                        </div>
                    </Col>
                
                    <Col>
                        <Form.Group 
                            as={Col} 
                            controlId="restaurantName" 
                            className="mb-3"
                        >  
                            <Form.Select   
                                onChange={(e) =>
                                    {setNameOrder(e.target.value)}} 
                                defaultValue={nameOrder}
                                className='form-select'
                                size="sm"
                            >
                                <option value='asc'>Stigande</option>
                                <option value='desc'>Fallande</option>
                            </Form.Select>  
                            <Form.Label>
                                <span className="smallFont"
                            >Sortera</span>
                            </Form.Label> 
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group 
                            as={Col} 
                            controlId="restaurantType" 
                            className="mb-3"
                        >  
                            <Form.Select   
                                onChange={(e) =>
                                    {setType(e.target.value)}} 
                                defaultValue={type}
                                className='form-select'
                                size="sm"
                            >
                                <option value='café'>Café</option>
                                <option value='restaurang'>Restaurang</option>
                                <option value='snabbmat'>Snabbmat</option>
                                <option value='kiosk-grill'>Kiosk/Grill</option>
                                <option value='foodtruck'>Foodtruck</option>
                            </Form.Select>   
                            <Form.Label>
                                <span className="smallFont"
                            >Typ</span>
                            </Form.Label>
                        </Form.Group>                           
                    </Col>
                    {restaurants && (
                        <ResultsList nameOrder={nameOrder} setNameOrder={setNameOrder} setType={setType} type={type} restaurants={restaurants} />
                    )}
                </Row>
            </div>
        </>
    )
}
export default Sidebar


